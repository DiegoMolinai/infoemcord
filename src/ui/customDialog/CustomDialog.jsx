import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

const CustomDialog = ({
  open,
  onClose,
  title,
  children,
  onConfirm,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  showActions = true,
  confirmColor = "primary",
  cancelColor = "primary",
  maxWidth = "sm",
  sxOverrides = {},
  actions = null, // <-- nueva prop
}) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 1,
          border: 2,
          borderColor: "#ccc",
          backgroundColor: theme.palette.background.paper,
          ...sxOverrides,
        },
      }}
    >
      {title && (
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "1.4rem",
            px: 3,
            pb: 1,
          }}
        >
          {title}
        </DialogTitle>
      )}

      <DialogContent
        dividers
        sx={{
          px: 3,
          pb: 2,
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        {children}
      </DialogContent>

      {showActions && (
        <DialogActions
          sx={{
            px: 3,
            py: 2,
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          {actions
            ? actions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  color={action.color || "primary"}
                  variant={action.variant || "contained"}
                  startIcon={action.icon || null}
                >
                  {action.label}
                </Button>
              ))
            : (
              <>
                <Button onClick={onClose} color={cancelColor} variant="contained">
                  {cancelLabel}
                </Button>
              </>
            )}
        </DialogActions>
      )}
    </Dialog>
  );
};

CustomDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onConfirm: PropTypes.func,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  showActions: PropTypes.bool,
  confirmColor: PropTypes.oneOf(["primary", "secondary", "error", "success"]),
  cancelColor: PropTypes.oneOf(["primary", "secondary", "error", "success"]),
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  sxOverrides: PropTypes.object,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      color: PropTypes.string,
      variant: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
};

export default CustomDialog;
