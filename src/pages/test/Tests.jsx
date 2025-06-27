import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import testsData from "../../components/Test/math/math.json";
import { Typography, Button } from "@mui/material";

function Tests() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [testCount, setTestCount] = useState(5);

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };
  const handleCountChange = (event) => {
    setTestCount(Number(event.target.value));
  };

  const filteredTests = selectedLevel
    ? testsData
        .filter((test) => test.daraja === selectedLevel)
        .slice(0, testCount)
    : [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Testlar ro‘yxati</h1>

      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        <Select
          value={selectedLevel}
          onChange={handleLevelChange}
          displayEmpty
          style={{ minWidth: "200px" }}
        >
          <MenuItem value="">
            <em>Darajani tanlang</em>
          </MenuItem>
          <MenuItem value="oson">Boshlang‘ich</MenuItem>
          <MenuItem value="ortacha">O‘rta</MenuItem>
          <MenuItem value="qiyin">Yuqori</MenuItem>
        </Select>
        <Select
          value={testCount}
          onChange={handleCountChange}
          style={{ minWidth: "120px" }}
        >
          {[5, 10, 15, 20, 30, 50].map((count) => (
            <MenuItem key={count} value={count}>
              {count} ta
            </MenuItem>
          ))}
        </Select>
      </div>

      {filteredTests.length === 0 && selectedLevel && (
        <p>Tanlangan darajada testlar topilmadi.</p>
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
              <strong>Thema:</strong> {test.thema} <br />
              <Typography variant="h6" style={{ marginTop: "8px" }}>
                <strong>Sovol:</strong> {test.savol} <br />
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: 8,
                }}
              >
                {test.variantlar.map((variant, index) => (
                  <Button
                    key={index}
                    appearance="ghost"
                    style={{
                      minWidth: 80,
                      fontWeight: 500,
                      border: "1px solid #1976d2",
                      color: "#1976d2",
                    }}
                  >
                    {variant}
                  </Button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tests;
