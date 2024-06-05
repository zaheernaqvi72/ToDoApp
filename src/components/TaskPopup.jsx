import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/taskActions';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import './TaskPopup.css';

function TaskPopup({ task, onClose }) {
  const [editedTask, setEditedTask] = useState(task);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(editTask(editedTask));
    onClose();
  };

  return (
    <Dialog open onClose={onClose} className="TaskPopup">
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Task Name"
          value={editedTask.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={editedTask.description}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          multiline
          rows={3}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          value={editedTask.date}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          name="time"
          label="Time"
          type="time"
          value={editedTask.time}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

TaskPopup.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TaskPopup;
