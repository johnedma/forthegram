import React from "react";
import Modal from 'react-modal';

const FollowsModal = ({ show, handleClose, customStyles, handleClick, suggestions, follows }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            style={customStyles}
            contentLabel='Modal'
            handleClose={handleClose}
            suggestions={suggestions}
        >
            <>
                <button onClick={handleClose}
                    style={{
                        // top: `-5px`,
                        // left: `180px`,
                        // position: `relative`,
                        position: `absolute`,
                        right: `25px`,
                        borderRadius: `1em`,
                        background: `none`,
                        border: `solid 2px black`
                    }}
                >
                    <span style={{ fontWeight: `700` }}>X</span>
                </button>
                {(!follows.length) ? null :
                    <>
                        <h2>People that you are following</h2>
                        {follows.map(person => {
                            return (
                                <div key={person.id}>
                                    {person.user_name}
                                    <button onClick={handleClick} id={person.id}>Follow</button>
                                </div>
                            )
                        })}
                    </>
                }
                {(!suggestions.length) ? null :
                    <>
                        <h2>Suggestions to Follow</h2>
                        {suggestions.map(person => {
                            console.log(person);
                            return (
                                <div key={person.id}>
                                    {person.user_name}
                                    <button onClick={handleClick} id={person.id}>Follow</button>
                                </div>
                            )
                        })}
                    </>
                }
            </>
        </Modal>
    )
}

export default FollowsModal
