import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import testsData from "../../components/Test/math/math.json";
import { Typography, Button } from "@mui/material";

function Tests() {
  const subjects = Array.from(new Set(testsData.map((t) => t.fan)));
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [testCount, setTestCount] = useState(5);
  const [selectedVariants, setSelectedVariants] = useState({});

  const levels = Array.from(
    new Set(
      testsData.filter((t) => t.fan === selectedSubject).map((t) => t.daraja)
    )
  );

  const filteredTests =
    selectedSubject && selectedLevel
      ? testsData
          .filter(
            (test) =>
              test.fan === selectedSubject && test.daraja === selectedLevel
          )
          .slice(0, testCount)
      : [];

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedLevel("");
    setSelectedVariants({});
  };
  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
    setSelectedVariants({});
  };
  const handleCountChange = (event) => {
    setTestCount(Number(event.target.value));
    setSelectedVariants({});
  };
  const handleVariantClick = (testId, variant) => {
    setSelectedVariants((prev) => ({ ...prev, [testId]: variant }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Testlar ro‘yxati</h1>

      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        <Select
          value={selectedSubject}
          onChange={handleSubjectChange}
          displayEmpty
          style={{ minWidth: "160px" }}
        >
          <MenuItem value="">
            <em>Fanni tanlang</em>
          </MenuItem>
          {subjects.map((fan) => (
            <MenuItem key={fan} value={fan}>
              {fan}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={selectedLevel}
          onChange={handleLevelChange}
          displayEmpty
          style={{ minWidth: "140px" }}
          disabled={!selectedSubject}
        >
          <MenuItem value="">
            <em>Darajani tanlang</em>
          </MenuItem>
          {levels.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={testCount}
          onChange={handleCountChange}
          style={{ minWidth: "100px" }}
          disabled={!selectedLevel}
        >
          {[5, 10, 15, 20, 30, 50].map((count) => (
            <MenuItem key={count} value={count}>
              {count} ta
            </MenuItem>
          ))}
        </Select>
      </div>

      {filteredTests.length === 0 && selectedLevel && (
        <p>Tanlangan fanda va darajada testlar topilmadi.</p>
      )}

      {filteredTests.length > 0 && (
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            listStyleType: "none",
            padding: 0,
            gap: "16px",
            overflowY: "auto",
            maxHeight: "800px",
          }}
        >
          {filteredTests.map((test) => (
            <li
              key={test.id}
              style={{
                marginBottom: "10px",
                border: "2px solid #1976d2",
                borderRadius: "10px",
                padding: "16px",
                minWidth: "260px",
                background: "#f9fafd",
                boxShadow: "0 2px 8px rgba(25, 118, 210, 0.07)",
                flex: "1 1 260px",
                maxWidth: "350px",
              }}
            >
              <Typography variant="h6" style={{ marginTop: "8px" }}>
                <strong>Savol:</strong> {test.savol} <br />
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: 8,
                }}
              >
                {test.variantlar.map((variant, index) => {
                  let color = "#1976d2";
                  let bg = "#fff";
                  if (selectedVariants[test.id]) {
                    if (
                      variant === test.javob &&
                      selectedVariants[test.id] === variant
                    ) {
                      color = "#fff";
                      bg = "#43a047";
                    } else if (selectedVariants[test.id] === variant) {
                      color = "#fff";
                      bg = "#e53935";
                    } else if (variant === test.javob) {
                      color = "#43a047";
                    }
                  }
                  return (
                    <Button
                      key={index}
                      variant="outlined"
                      onClick={() => handleVariantClick(test.id, variant)}
                      style={{
                        minWidth: 80,
                        fontWeight: 500,
                        border: "1px solid #1976d2",
                        color,
                        background: bg,
                        transition: "all 0.2s",
                      }}
                      disabled={!!selectedVariants[test.id]}
                    >
                      {variant}
                    </Button>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tests;
