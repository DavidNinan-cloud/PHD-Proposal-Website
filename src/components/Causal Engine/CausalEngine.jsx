import React from 'react'
import IntroPage from '../Reuseable Components/IntroPage'
import OutputLayer from './OutputLayer'
import TemporalEngine from './TemporalEngine'
import JTSEngine from './JTSEngine'
import CausalEngineMainPage from './CausalEngineMainPage'
import CausalDataIngestion from './CausalDataIngestion'
import CausalEngineHeader from './CausalEngineHeader'



export default function CausalEngine() {
  return (
    <div id='engine-simulation'>
                
        <IntroPage details={'Causal Engine'} />
        <CausalEngineHeader/>            
        <CausalEngineMainPage/>
        {/* <IntroCasualEngine details={'Causal Engine'} subtext={'Layer 1: Ingestion & Boundary'}/> */}  
        <CausalDataIngestion/>
        {/* <IntroCasualEngine details={'Causal Engine'} subtext={'Layer 2: The Core Engine'}/> */}

        <JTSEngine/>
        {/* <IntroCasualEngine details={'Causal Engine'} subtext={'Layer 3: Analysis & Discovery'}/> */}
        <TemporalEngine/>
        {/* <IntroCasualEngine details={'Causal Engine'} subtext={'Layer 4: Predictive Nowcasting'}/> */}
        <OutputLayer/>

    </div>
  )
}
