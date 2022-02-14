export const cardContentContainer = {
  width: "100%",
  height: "auto",
  position: "relative",
  display: "block",
  pointerEvents: "none",
};

export const openedCardContentContainer = {
  top: 0,
  left: 0,
  right: 0,
  position: "fixed",
  zIndex: 1,
  overflow: "hidden",
  padding: "40px 0",
  "& img": {
    borderRadius: "20px",
  },
  "& .card-content": {
    height: "auto",
    maxWidth: 720,
    overflow: "hidden",
    pointerEvents: "none",
  },
};

export const cardContent = {
  pointerEvents: "auto",
  position: "relative",
  borderRadius: 20,
  background: "#1c1c1e",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  margin: "0 auto",
};
