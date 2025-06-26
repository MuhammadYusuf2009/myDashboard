import React, { useState } from "react";
import { Calendar, Modal, Input } from "rsuite";
import { useSelector } from "../../hooks/use-selector";
import { useDispatch } from "../../hooks/use-dispatch";
import { deletePlan, savePlan } from "../../store/calendars";
import "rsuite/dist/rsuite.min.css";
import SaveButton from "../../components/button/SaveButton";
import BackButton from "../../components/button/BackButton";
import RemoveButton from "../../components/button/RemoveButton";

function Calendars() {
  const today = new Date();
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.plans);

  const dayColors = {
    1: "#EF5350",
    2: "#FFCA28",
    3: "#66BB6A",
    4: "#9CCC65",
    5: "#42A5F5",
    6: "#90A4AE",
    0: "#B0BEC5",
  };

  const [currentMonth, setCurrentMonth] = useState({
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [planText, setPlanText] = useState("");
  const [open, setOpen] = useState(false);

  const getMonthKey = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

  const handleSelect = (date) => {
    const monthKey = getMonthKey(date);
    const dayKey = date.toDateString();

    if (
      date.getMonth() === currentMonth.month &&
      date.getFullYear() === currentMonth.year
    ) {
      setSelectedDate(date);
      setPlanText(plans[monthKey]?.[dayKey] || "");
      setOpen(true);
    }
  };
  const handleDelete = () => {
    if (!selectedDate) return;
    const monthKey = getMonthKey(selectedDate);
    const dayKey = selectedDate.toDateString();
    dispatch(deletePlan({ date: dayKey, monthKey }));
    setOpen(false);
    setPlanText("");
  };
  const handleSave = () => {
    const monthKey = getMonthKey(selectedDate);
    const dayKey = selectedDate.toDateString();
    dispatch(savePlan({ date: dayKey, monthKey, text: planText }));
    setOpen(false);
    setPlanText("");
  };

  const monthKey = getMonthKey(new Date(currentMonth.year, currentMonth.month));
  const currentMonthPlans = plans[monthKey] || {};

  return (
    <div style={{ padding: 20 }}>
      <Calendar
        bordered
        onMonthChange={(newDate) => {
          setCurrentMonth({
            month: newDate.getMonth(),
            year: newDate.getFullYear(),
          });
        }}
        onSelect={handleSelect}
        renderCell={(date) => {
          const day = date.getDay();
          const isToday =
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

          const isCurrentMonth =
            date.getMonth() === currentMonth.month &&
            date.getFullYear() === currentMonth.year;

          const style = {
            background: isCurrentMonth ? dayColors[day] : "#f5f5f5",
            color: isCurrentMonth ? "#fff" : "#9e9e9e",
            borderRadius: "8px",
            padding: "4px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: isToday ? "bold" : "normal",
            opacity: isCurrentMonth ? 1 : 0.5,
            cursor: isCurrentMonth ? "pointer" : "not-allowed",
            pointerEvents: isCurrentMonth ? "auto" : "none",
            textAlign: "center",
          };

          const hasPlan = (() => {
            const key = getMonthKey(date);
            const dKey = date.toDateString();
            return plans[key] && plans[key][dKey];
          })();

          return (
            <div style={style}>
              {isCurrentMonth && hasPlan && (
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#FFEB3B",
                    marginTop: "4px",
                  }}
                />
              )}

              {isCurrentMonth && isToday && (
                <div
                  style={{
                    marginTop: 4,
                    padding: "2px 6px",
                    backgroundColor: "#FF4081",
                    color: "#fff",
                    borderRadius: "12px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Bugun
                </div>
              )}
            </div>
          );
        }}
      />

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title>Reja qo‘shish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>{selectedDate?.toDateString()}</b> uchun reja yozing:
          </p>
          <Input
            as="textarea"
            rows={4}
            value={planText}
            onChange={(value) => setPlanText(value)}
            placeholder="Reja matnini yozing..."
          />
        </Modal.Body>
        <Modal.Footer>
          <SaveButton onClick={handleSave} />
          <BackButton onClick={() => setOpen(false)} sx={{ ml: 2 }} />
          <RemoveButton onClick={handleDelete} sx={{ ml: 2 }} />
        </Modal.Footer>
      </Modal>

      <div style={{ marginTop: 30 }}>
        <h4>📋 {monthKey} oy rejalari:</h4>
        <div
          style={{
            maxHeight: "150px",
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            background: "#fff",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "8px",
              alignItems: "start",
            }}
          >
            {Object.entries(currentMonthPlans).map(([date, text]) => (
              <div
                key={date}
                style={{
                  background: "#f9f9f9",
                  padding: "8px",
                  borderRadius: "6px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <strong style={{ marginBottom: "4px", fontSize: "13px" }}>
                  {date}
                </strong>
                <div
                  style={{
                    fontSize: "13px",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    overflowY: "auto",
                    flexGrow: 1,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendars;
