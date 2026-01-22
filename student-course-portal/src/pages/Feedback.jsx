import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";

export default function Feedback() {
  const { setToast } = useContext(AppContext);

  const [mood, setMood] = useState("😊");
  const [stars, setStars] = useState(4);
  const [message, setMessage] = useState("");

  const options = ["Content Quality", "Instructor", "UI Design", "Speed", "Support"];
  const [selected, setSelected] = useState([]);

  const toggleChip = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const submitFeedback = () => {
    if (!message.trim()) {
      setToast({ open: true, msg: "Please write feedback ✍️", type: "warning" });
      return;
    }

    // frontend-only (no backend)
    console.log("Feedback submitted:", { mood, stars, selected, message });

    setToast({
      open: true,
      msg: "Thank you! Feedback submitted successfully 🎉",
      type: "success",
    });

    // reset
    setMood("😊");
    setStars(4);
    setMessage("");
    setSelected([]);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-2">Feedback</h2>
        <p className="text-muted mb-0">
          Help us improve your learning experience 💡
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-7">
          <Card sx={{ borderRadius: 5, boxShadow: 4 }}>
            <CardContent sx={{ p: 4 }}>
              {/* Mood */}
              <Typography fontWeight={800} sx={{ mb: 1 }}>
                1) How was your experience?
              </Typography>

              <div className="d-flex gap-3 mb-4">
                {["😡", "😐", "😊", "😍"].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => setMood(emoji)}
                    className={`emoji-btn ${mood === emoji ? "active" : ""}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>

              {/* Stars */}
              <Typography fontWeight={800} sx={{ mb: 1 }}>
                2) Rate us
              </Typography>

              <div className="d-flex align-items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    style={{ cursor: "pointer" }}
                    onClick={() => setStars(i)}
                    title={`${i} star`}
                  >
                    {i <= stars ? (
                      <StarIcon fontSize="large" color="warning" />
                    ) : (
                      <StarBorderIcon fontSize="large" color="warning" />
                    )}
                  </span>
                ))}
                <span className="ms-2 text-muted fw-semibold">
                  ({stars}/5)
                </span>
              </div>

              {/* Chips */}
              <Typography fontWeight={800} sx={{ mb: 1 }}>
                3) What did you like?
              </Typography>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {options.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    color={selected.includes(item) ? "primary" : "default"}
                    onClick={() => toggleChip(item)}
                  />
                ))}
              </div>

              {/* Message */}
              <Typography fontWeight={800} sx={{ mb: 1 }}>
                4) Tell us more
              </Typography>

              <TextField
                multiline
                rows={5}
                fullWidth
                placeholder="Write your feedback here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {/* Submit */}
              <div className="d-flex justify-content-end mt-4">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  onClick={submitFeedback}
                  sx={{ borderRadius: 3, px: 4 }}
                >
                  Submit
                </Button>
              </div>

              {/* Small footer */}
              <div className="text-center text-muted small mt-4">
                Mood selected: <span className="fw-bold">{mood}</span> • Your
                feedback helps us grow 🌱
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
