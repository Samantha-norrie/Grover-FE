import React, { useState } from "react";
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import "../App.css";
import { useSpring, animated } from '@react-spring/web';
import { HOW_DOES_GROVER_WORK, STEP_ONE_TEXT, STEP_THREE_TEXT, STEP_TWO_TEXT, WELCOME_TEXT, WHAT_IS_GROVER } from "../Utils";

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
          {React.cloneElement(children, {onClick })}
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
    color: 'black',
    borderRadius: '2rem',
    height: "40rem",
    width: "40rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };

function InstructionsModal(props) {
    const [instructionStep, setInstructionStep] = useState(1);

    const {handleOpen, handleClose, open} = props;

    return(
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                TransitionComponent: Fade,
            },
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <div>
                    {instructionStep === 1 &&
                        <div>
                            <h3>{WELCOME_TEXT}</h3>
                            <p>{STEP_ONE_TEXT}</p>
                        </div>
                    }
                    {instructionStep === 2 &&
                        <div>
                            <h3>{WHAT_IS_GROVER}</h3>
                            <p>{STEP_TWO_TEXT}</p>
                            <img src="ball_trinket.png" height="300px" width="300px"/>
                        </div>
                    }
                    {instructionStep === 3 &&
                        <div>
                            <h3>{HOW_DOES_GROVER_WORK}</h3>
                            {/* <img src="../public.ball_trinket"/> */}
                            {STEP_THREE_TEXT}
                        </div>
                    }
                </div>
                <div>
                    <Slider
                        aria-label="Temperature"
                        value={instructionStep}
                        valueLabelDisplay="auto"
                        onChange={(_, val)=> {setInstructionStep(val)}}
                        step={1}
                        marks
                        min={1}
                        max={4}
                    />
                </div>
            </Box>
            </Fade>
        </Modal>
    );

}

export default InstructionsModal;