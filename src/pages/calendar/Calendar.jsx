import React, { useEffect, useState } from "react";
import { Calendar, Modal, Input, TimePicker } from "rsuite";
import { useSelector } from "../../hooks/use-selector";
import { useDispatch } from "../../hooks/use-dispatch";
import { deletePlan, savePlan } from "../../store/calendars";
import "rsuite/dist/rsuite.min.css";
import SaveButton from "../../components/button/SaveButton";
import BackButton from "../../components/button/BackButton";
import RemoveButton from "../../components/button/RemoveButton";

function Calendars() {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  });
  const today = new Date();
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.plans);

  const dayColors = {
    0: "#B0BEC5",
    1: "#EF5350",
    2: "#FFCA28",
    3: "#66BB6A",
    4: "#9CCC65",
    5: "#42A5F5",
    6: "#90A4AE",
  };

  const [currentMonth, setCurrentMonth] = useState({
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [planText, setPlanText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [open, setOpen] = useState(false);

  const getMonthKey = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

  const getDayKey = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;

  const handleSelect = (date) => {
    const monthKey = getMonthKey(date);
    const dayKey = getDayKey(date);
    const currentPlan = plans[monthKey]?.[dayKey];

    if (
      date.getMonth() === currentMonth.month &&
      date.getFullYear() === currentMonth.year
    ) {
      setSelectedDate(date);
      setPlanText(currentPlan?.text || "");
      setStartTime(
        currentPlan?.startTime
          ? new Date(`1970-01-01T${currentPlan.startTime}`)
          : null
      );
      setEndTime(
        currentPlan?.endTime
          ? new Date(`1970-01-01T${currentPlan.endTime}`)
          : null
      );
      setOpen(true);
    }
  };

  const handleDelete = () => {
    if (!selectedDate) return;
    const monthKey = getMonthKey(selectedDate);
    const dayKey = getDayKey(selectedDate);
    dispatch(deletePlan({ date: dayKey, monthKey }));
    setOpen(false);
    setPlanText("");
    setStartTime(null);
    setEndTime(null);
  };

  const handleSave = () => {
    if (!selectedDate) return;
    const monthKey = getMonthKey(selectedDate);
    const dayKey = getDayKey(selectedDate);

    dispatch(
      savePlan({
        date: dayKey,
        monthKey,
        text: planText,
        startTime: startTime ? startTime.toTimeString().slice(0, 5) : null,
        endTime: endTime ? endTime.toTimeString().slice(0, 5) : null,
      })
    );
    setOpen(false);
    setPlanText("");
    setStartTime(null);
    setEndTime(null);
  };

  const monthKey = getMonthKey(new Date(currentMonth.year, currentMonth.month));
  const currentMonthPlans = plans[monthKey] || {};

  return (
    <div style={{ padding: 20 }}>
      <Calendar
        bordered
        onMonthChange={(newDate) =>
          setCurrentMonth({
            month: newDate.getMonth(),
            year: newDate.getFullYear(),
          })
        }
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

          const hasPlan = plans[getMonthKey(date)]?.[getDayKey(date)];

          return (
            <div style={style}>
              {isCurrentMonth && hasPlan && (
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
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
          <Modal.Title>Reja qo‘shish / tahrirlash</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>{selectedDate ? getDayKey(selectedDate) : ""}</b> uchun reja
            yozing:
          </p>
          <Input
            as="textarea"
            rows={4}
            value={planText}
            onChange={(value) => setPlanText(value)}
            placeholder="Reja matnini yozing..."
          />
          <div style={{ marginTop: 10 }}>
            <TimePicker
              format="HH:mm"
              value={startTime}
              onChange={setStartTime}
              style={{ width: "100%" }}
              placeholder="Boshlanish vaqti"
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <TimePicker
              format="HH:mm"
              value={endTime}
              onChange={setEndTime}
              style={{ width: "100%" }}
              placeholder="Tugash vaqti"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <SaveButton
            onClick={handleSave}
            disabled={!planText || !startTime || !endTime}
          />
          <RemoveButton onClick={handleDelete} sx={{ ml: 2 }} />
          <BackButton onClick={() => setOpen(false)} sx={{ ml: 2 }} />
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
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "8px",
              alignItems: "start",
            }}
          >
            {Object.entries(currentMonthPlans).map(([date, data]) => (
              <div
                key={date}
                style={{
                  background: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "6px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <div style={{ fontSize: "13px" }}>
                  <strong>Sana:</strong> {date}
                </div>
                {(data.startTime || data.endTime) && (
                  <div style={{ fontSize: "13px" }}>
                    <strong>Vaqt:</strong> {data.startTime || "??"} dan{" "}
                    {data.endTime || "??"} gacha
                  </div>
                )}
                <div style={{ fontSize: "13px" }}>
                  <strong>Yozuv:</strong> {data.text}
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
