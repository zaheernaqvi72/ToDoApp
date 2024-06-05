import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';
import { TextField, Button, Grid, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './TaskForm.css'; // Import the CSS file

function TaskForm() {
  const [task, setTask] = useState({ name: '', description: '', date: '', time: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({ name: '', description: '', date: '', time: '' });
  };

  return (
    <div className="TaskFormContainer">
      <Typography variant="h5" gutterBottom>
        Add New Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Task Name"
              value={task.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              value={task.description}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="date"
              label="Date"
              type="date"
              value={task.date}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="time"
              label="Time"
              type="time"
              value={task.time}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          style={{ marginTop: 20 }}
          fullWidth
        >
          Add Task
        </Button>
      </form>
    </div>
  );
}

export default TaskForm;
