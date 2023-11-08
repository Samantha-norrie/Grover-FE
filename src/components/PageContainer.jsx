import React from "react";
import InputRow from "./InputRow";
import GraphRow from "./GraphRow";
import CircuitRow from "./CircuitRow";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import "../App.css";
import { useSpring, animated } from '@react-spring/web';
import InstructionsModal from "./InstructionsModal";

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
      children,
      in: open,
      onClick,
      onEnter,
      onExited,
      ownerState,
      ...other
    } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter(null, true);
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited(null, true);
        }
      },
    });
    return (
        <animated.div ref={ref} style={style} {...other}>
          {React.cloneElement(children, { onClick })}
        </animated.div>
      );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function PageContainer() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="Page-container">
            <div className="Info-button-container">
                <Button onClick={handleOpen}>Help!</Button>
            </div>
            <InstructionsModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
            <div className="Grover-container">
                <InputRow/>
                <CircuitRow/>
                <GraphRow/>
            </div>
        </div>
    );
};

export default PageContainer;