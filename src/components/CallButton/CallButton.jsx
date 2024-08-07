import React from 'react';
import './callbutton.css';
function CallButton({ phoneNumber }) {
  const handleCallClick = () => {

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.location.href = `tel:${phoneNumber}`; 
    }
  };

  return (
    <button type="button" className="call-button" onClick={handleCallClick}>
       {phoneNumber}
    </button>
  );
}

export default CallButton;
