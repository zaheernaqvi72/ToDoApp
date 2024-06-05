import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../redux/actions/taskActions';
import { IconButton, Checkbox, Typography, Grid } from '@mui/material'; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TaskPopup from './TaskPopup';
import './TaskItem.css'; 

function TaskItem({ task }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleEdit = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="TaskItemContainer" style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'green' : 'black' }}>
      <div className="TaskItemTop">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Checkbox checked={task.completed} onChange={handleToggle} />
          </Grid>
          <Grid item>
            <Typography variant="h6">{task.name}</Typography>
          </Grid>
        </Grid>
      </div>
      <div className="TaskItemDetails">
        <Typography>
          <span>Date: {task.date}</span>
          <br />
          <span>Time: {task.time}</span>
        </Typography>
      </div>
      <div className="TaskItemButtons">
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton style={{color: 'red'}} onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
      {isPopupOpen && <TaskPopup task={task} onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TaskItem;
