import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ReactAudioPlayer from 'react-audio-player';

const Music = () => {
  return (
    <div >
        <ReactAudioPlayer
            src=''
            autoPlay
            controls
            loop
        />

    </div>
  );
};

export default Music;
