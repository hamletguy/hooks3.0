import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 7,
};
export default function Addmovie({ addMovie }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const onAddMovie = () => {
    const newMovie = {
      id: Math.floor(Math.random() * 1000),
      name,
      genre,
      poster,
      trailer,
      description,
      rating: Number(rating),
    };
    addMovie(newMovie);
    setName("");
    setGenre("");
    setRating("");
    setPoster("");
    setTrailer("");
    setDescription("");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 style={{ fontFamily: " Georgia, serif" }}>Add Movie</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{ fontSize: 20, fontFamily: " Georgia, serif" }}
                >
                  movie name
                </label>{" "}
                <br />
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  aria-describedby="emailHelp"
                  style={{ width: "100%", height: 20 }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="genre"
                  className="form-label"
                  style={{ fontSize: 20, fontFamily: " Georgia, serif" }}
                >
                  genre
                </label>
                <br />
                <input
                  value={genre}
                  onChange={(event) => setGenre(event.target.value)}
                  type="text"
                  className="form-control"
                  name="genre"
                  id="genre"
                  aria-describedby="emailHelp"
                  style={{ width: "100%", height: 20 }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="rating"
                  className="form-label"
                  style={{ fontSize: 20, fontFamily: " Georgia, serif" }}
                >
                  rating
                </label>
                <br />
                <input
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  type="number"
                  className="form-control"
                  name="rating"
                  id="rating"
                  aria-describedby="emailHelp"
                  style={{ width: "100%", height: 20 }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="poster"
                  className="form-label"
                  style={{ fontSize: 20, fontFamily: " Georgia, serif" }}
                >
                  poster
                </label>
                <br />
                <input
                  value={poster}
                  onChange={(event) => setPoster(event.target.value)}
                  type="url"
                  className="form-control"
                  name="poster"
                  id="poster"
                  aria-describedby="emailHelp"
                  style={{ width: "100%", height: 20 }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="trailer"
                  className="form-label"
                  style={{ fontSize: 20, fontFamily: " Georgia, serif" }}
                >
                  trailer
                </label>
                <br />
                <input
                  value={trailer}
                  onChange={(event) => setTrailer(event.target.value)}
                  type="url"
                  className="form-control"
                  name="trailer"
                  id="trailer"
                  aria-describedby="emailHelp"
                  style={{ width: "100%", height: 20 }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="form-label"
                  style={{ fontSize: 20, fontFamily: " Georgia, serif" }}
                >
                  description
                </label>
                <br />
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="form-control"
                  name="description"
                  id="description"
                  aria-describedby="emailHelp"
                  style={{ width: "100%", height: 70 }}
                >
                  {" "}
                </textarea>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onAddMovie}
                style={{
                  backfaceVisibility: "hidden",
                  backgroundColor: "#405cf5",
                  borderRadius: "6px",
                  borderWidth: 0,
                  color: "#FFF",
                  cursor: "pointer",
                  fontSsize: "100%",
                  height: "44px",
                  lineHheight: 1.15,
                  margin: "12px 0 0",
                  outline: "none",
                  overflow: "hidden",
                  padding: "0 25px",
                  position: "relative",
                  textAalign: "center",
                  textTtransform: "none",
                  transform: "translateZ(0)",
                  userSselect: "none",
                  color: "white",
                  touchAaction: "manipulation",
                  width: "100%",
                }}
              >
                Add
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
