import React from 'react'
import EngineFlow from './EngineFlow'
import CausalEngine from './CausalEngine'
import Timeline from './Timeline'
import StrategicImpact from './StrategicImpact'
import Intro from './Intro'

export default function Proposal() {
  return (
    <div id='proposal'>
        <Intro/>
        <EngineFlow/>

        <CausalEngine/>

        <Timeline/>

        <StrategicImpact/>
    </div>
  )
}
