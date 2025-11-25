import { render, screen, fireEvent, within } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { LogoutModal } from "../LogoutModal";

import theme from "../../../theme/theme";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "logout.modal.title":
          "Are you sure you want to exit all current sessions?",
        "logout.modal.yes": "Yes",
        "logout.modal.no": "No",
      };

      return translations[key] || key;
    },
  }),
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("LogoutModal Component", () => {
  const mockOnConfirm = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("does not render when open is false", () => {
    renderWithTheme(
      <LogoutModal
        open={false}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />,
    );

    expect(
      screen.queryByText(/are you sure you want to exit/i),
    ).not.toBeInTheDocument();
  });

  test("renders modal when open is true", () => {
    renderWithTheme(
      <LogoutModal
        open={true}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />,
    );

    expect(
      screen.getByText(/are you sure you want to exit/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /no/i })).toBeInTheDocument();
  });

  test("calls onConfirm when Yes button is clicked", () => {
    renderWithTheme(
      <LogoutModal
        open={true}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />,
    );

    const yesButton = screen.getByRole("button", { name: /yes/i });
    fireEvent.click(yesButton);

    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  test("calls onCancel when No button is clicked", () => {
    renderWithTheme(
      <LogoutModal
        open={true}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />,
    );

    const noButton = screen.getByRole("button", { name: /no/i });
    fireEvent.click(noButton);

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });

  test("renders info icon element", () => {
    renderWithTheme(
      <LogoutModal
        open={true}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />,
    );

    const iconElement = screen.getByTestId("logout-modal-icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("disables buttons when isLoading is true", () => {
    renderWithTheme(
      <LogoutModal
        open={true}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
        isLoading={true}
      />,
    );

    const yesButton = screen.getByRole("button", { name: /yes/i });
    const noButton = screen.getByRole("button", { name: /no/i });

    expect(yesButton).toBeDisabled();
    expect(noButton).toBeDisabled();
  });

  test("modal structure is accessible", () => {
    renderWithTheme(
      <LogoutModal
        open={true}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />,
    );

    const modal = screen.getByRole("presentation");
    const modalContent = within(modal).getByText(
      /are you sure you want to exit/i,
    );

    expect(modalContent).toHaveAttribute("id", "logout-modal-title");
  });
});
