import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bvjobhpjhgzvmnurfefr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2am9iaHBqaGd6dm1udXJmZWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MDI1OTEsImV4cCI6MjA1NTE3ODU5MX0.XfHEOF09vm-yvfM4qRA0eEiB9KHi0n3BeJJf8ZIC9d0"
);

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;
