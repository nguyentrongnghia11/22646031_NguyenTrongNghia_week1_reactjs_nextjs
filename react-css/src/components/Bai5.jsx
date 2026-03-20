import { useState, useEffect } from "react";

const API_BASE = "https://68dd1a2f7cd1948060ac69a9.mockapi.io";

export default function Bai5() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newWorkout, setNewWorkout] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  // GET - Fetch all workouts
  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/workout`);
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error("Error fetching workouts:", error);
      alert("Lỗi khi tải dữ liệu");
    } finally {
      setLoading(false);
    }
  };

  // POST - Add new workout
  const handleAddWorkout = async (e) => {
    e.preventDefault();
    if (!newWorkout.trim()) {
      alert("Vui lòng nhập tên bài tập");
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/workout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newWorkout,
          completed: false,
        }),
      });
      const newItem = await response.json();
      setWorkouts([...workouts, newItem]);
      setNewWorkout("");
    } catch (error) {
      console.error("Error adding workout:", error);
      alert("Lỗi khi thêm bài tập");
    }
  };

  // PUT - Update workout (toggle completed or edit name)
  const handleUpdateWorkout = async (id, updatedData) => {
    try {
      const response = await fetch(`${API_BASE}/workout/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const updatedItem = await response.json();
      setWorkouts(
        workouts.map((item) => (item.id === id ? updatedItem : item))
      );
      setEditingId(null);
      setEditingValue("");
    } catch (error) {
      console.error("Error updating workout:", error);
      alert("Lỗi khi cập nhật bài tập");
    }
  };

  // DELETE - Delete workout
  const handleDeleteWorkout = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa?")) {
      return;
    }

    try {
      await fetch(`${API_BASE}/workout/${id}`, {
        method: "DELETE",
      });
      setWorkouts(workouts.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting workout:", error);
      alert("Lỗi khi xóa bài tập");
    }
  };

  const handleToggleCompleted = (id, completed) => {
    const item = workouts.find((w) => w.id === id);
    handleUpdateWorkout(id, {
      ...item,
      completed: !completed,
    });
  };

  const handleStartEdit = (id, name) => {
    setEditingId(id);
    setEditingValue(name);
  };

  const handleSaveEdit = (id) => {
    if (!editingValue.trim()) {
      alert("Vui lòng nhập tên bài tập");
      return;
    }
    const item = workouts.find((w) => w.id === id);
    handleUpdateWorkout(id, {
      ...item,
      name: editingValue,
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>To do list</h1>

      <form onSubmit={handleAddWorkout} style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Nhập tên bài tập..."
            value={newWorkout}
            onChange={(e) => setNewWorkout(e.target.value)}
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Thêm
          </button>
        </div>
      </form>

      {loading && <p>Đang tải...</p>}

      {!loading && workouts.length === 0 && (
        <p style={{ textAlign: "center", color: "#999" }}>
          Chưa có bài tập nào. Hãy thêm một bài tập mới!
        </p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {workouts.map((workout) => (
          <li
            key={workout.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px",
              backgroundColor: workout.completed ? "#f0f0f0" : "#fff",
              border: "1px solid #ddd",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={workout.completed}
              onChange={() =>
                handleToggleCompleted(workout.id, workout.completed)
              }
              style={{ cursor: "pointer" }}
            />

            {editingId === workout.id ? (
              <input
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                style={{
                  flex: 1,
                  padding: "6px",
                  border: "1px solid #4CAF50",
                  borderRadius: "4px",
                }}
                autoFocus
              />
            ) : (
              <span
                style={{
                  flex: 1,
                  textDecoration: workout.completed ? "line-through" : "none",
                  color: workout.completed ? "#999" : "#000",
                }}
              >
                {workout.name}
              </span>
            )}

            <div style={{ display: "flex", gap: "5px" }}>
              {editingId === workout.id ? (
                <>
                  <button
                    onClick={() => handleSaveEdit(workout.id)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Lưu
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setEditingValue("");
                    }}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#999",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Hủy
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleStartEdit(workout.id, workout.name)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#2196F3",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDeleteWorkout(workout.id)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Xóa
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
