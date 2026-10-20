import { Navigate, Route, Routes } from "react-router-dom";
import { HealthPage } from "./features/health/HealthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HealthPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
