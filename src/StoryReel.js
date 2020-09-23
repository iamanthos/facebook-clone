import React from 'react';
import './StoryReel.css';
import Story from './Story';


function StoryReel() {
    return (
        <div className="storyReel">
             <Story image="https://i.pinimg.com/564x/e6/35/23/e6352375501d9530b81326d0c94db91d.jpg" profileSrc="https://i.pinimg.com/564x/f4/1f/e3/f41fe384dd173f91201f622e11be8a31.jpg" title="Anthos"/>
             <Story image="https://i.pinimg.com/564x/c6/eb/29/c6eb29b60a86051ff01f70e0d7d68786.jpg" profileSrc="https://i.pinimg.com/236x/05/93/86/05938686b21a6654812790653c43d423.jpg" title="Dev"/>
             <Story image="https://i.pinimg.com/564x/36/7c/9c/367c9c9997b598f3d712419607957117.jpg" profileSrc="https://i.pinimg.com/564x/4d/45/f3/4d45f3b22fc7c8681b4b1284e5e573a6.jpg" title="Kirito"/>
             <Story image="https://i.pinimg.com/564x/c4/0c/96/c40c966728eeec6be2b56ae108b53e37.jpg" profileSrc="https://i.pinimg.com/564x/6d/26/34/6d263403bb775aafbad202be42f5b536.jpg" title="Asuna"/>

        </div>
    )
}

export default StoryReel
