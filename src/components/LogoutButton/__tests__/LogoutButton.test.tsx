import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { LogoutButton } from "../index";
import { logout } from "../../../api/authService";
import theme from "../../../theme/theme";

jest.mock("../../../api/authService", () => ({
  logout: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>,
  );
};

describe("LogoutButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders logout button", () => {
    renderWithProviders(<LogoutButton />);
    const button = screen.getByRole("button", { name: /logout.button/i });
    expect(button).toBeInTheDocument();
  });

  test("opens modal when button is clicked", () => {
    renderWithProviders(<LogoutButton />);

    const button = screen.getByRole("button", { name: /logout.button/i });
    fireEvent.click(button);

    expect(screen.getByText("logout.modal.title")).toBeInTheDocument();
    expect(screen.getByText("logout.modal.yes")).toBeInTheDocument();
    expect(screen.getByText("logout.modal.no")).toBeInTheDocument();
  });

  test("closes modal when No is clicked", () => {
    renderWithProviders(<LogoutButton />);

    const button = screen.getByRole("button", { name: /logout.button/i });
    fireEvent.click(button);

    const noButton = screen.getByText("logout.modal.no");
    fireEvent.click(noButton);

    expect(screen.queryByText("logout.modal.title")).not.toBeInTheDocument();
  });

  test("calls logout and navigates when Yes is clicked", async () => {
    (logout as jest.Mock).mockResolvedValue(undefined);

    renderWithProviders(<LogoutButton />);

    const button = screen.getByRole("button", { name: /logout.button/i });
    fireEvent.click(button);

    const yesButton = screen.getByText("logout.modal.yes");
    fireEvent.click(yesButton);

    await waitFor(() => {
      expect(logout).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });

  test("disables button when loading", async () => {
    (logout as jest.Mock).mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 100)),
    );

    renderWithProviders(<LogoutButton />);

    const button = screen.getByRole("button", { name: /logout.button/i });
    fireEvent.click(button);

    const yesButton = screen.getByText("logout.modal.yes");
    fireEvent.click(yesButton);

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });
});
