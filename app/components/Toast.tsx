export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  show: boolean;
}

export function Toast({ message, type = "success", show }: ToastProps) {
  if (!show) return null;

  const alertType = {
    success: "alert-success",
    error: "alert-error",
    info: "alert-info",
  }[type];

  return (
    <div
      className={`
        toast z-50
        transform transition-all duration-300 ease-in-out
        animate-fade-out-4s
      `}
    >
      <div className={`alert ${alertType} text-lg`}>{message}</div>
    </div>
  );
}
