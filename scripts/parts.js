const insertTest = () => {

    const output = new MyGain(64);

    const bL = 1;

    const b2 = new MyBuffer2(1, bL, audioCtx.sampleRate);
    b2.am(432, 2, 1).add();
    b2.ramp(0, 1, 0.8, 0.8, 4, 0.8).multiply();

    const b = new MyBuffer2(1, bL, audioCtx.sampleRate);
    b.sine(432, 1).insert(0.5, 0.75);
    b.noise().insert(0.1, 0.2);
    b.addBuffer( b2.buffer );

    const i = new MyBuffer2(1, bL, audioCtx.sampleRate);
    i.impulse().fill();
    i.playbackRate = 1;

    const c = new MyConvolver(1, bL, audioCtx.sampleRate);

    c.setBuffer( b.buffer );

    bufferGraph(b.buffer);
    bufferGraph(i.buffer);

    i.connect(c);
    c.connect(output);
    output.connect(masterGain);

    i.startAtTime( globalNow+1 );

}

const insertFXTest = () => {

    const output = new MyGain(16);

    const bL = 1;

    const b = new MyBuffer2(1, bL, audioCtx.sampleRate);
    b.sine(432, 1).insert(0.5, 0.75);
    b.noise().insert(0.1, 0.2);

    const b2 = new MyBuffer2(1, bL, audioCtx.sampleRate);
    b2.am(432, 2, 1).add();
    b2.ramp(0, 1, 0.8, 0.8, 4, 0.8).multiply();

    b.addBuffer( b2.buffer );

    b2.sine(432*2, 1).fill();
    b2.ramp(0, 1, 0.01, 0.015, 0.5, 8).multiply();

    b.spliceBuffer( b2.buffer, 0, 1, 0.3 );

    b2.sine(432*4, 0.25).fill();
    b2.ramp(0, 1, 0.4, 0.6, 10, 10).multiply();

    b.spliceBuffer( b2.buffer, 0, 1, 0.6 );

    const i = new PercussionPresets();
    i.perc7();

    const c = new MyConvolver(1, bL, audioCtx.sampleRate);

    c.setBuffer( b.buffer );

    bufferGraph(b.buffer);
    // bufferGraph(i.buffer);

    i.connect(c);
    c.connect(output);
    output.connect(masterGain);

    i.startAtTime( globalNow+1 );

}

const bloomTest = () => {

    const output = new MyGain(64);

    const bL = 2;
    const fund = 432*0.5;

    const b = new MyBuffer2(1, bL, audioCtx.sampleRate);
    const aB = new MyBuffer2(1, bL, audioCtx.sampleRate);
    const c = new MyConvolver(1, bL, audioCtx.sampleRate);
    
    const i = new MyBuffer2(1, bL, audioCtx.sampleRate);
    i.impulse().add();
    i.playbackRate = 1.75;
    i.loop = true;

    let rP = 0;

    let cArray = [1, M2, P4, M6];

    for(let i=0; i<8; i++){

        rP = randomFloat(0.5, 0.7);

        aB.sine(fund*randomArrayValue([1, 2, 4, 8])*randomArrayValue(cArray)*randomFloat(0.99, 1.01), 1).fill();
        aB.ramp(0, 1, rP, rP, randomFloat(4, 12), randomFloat(4, 12)).multiply();

        b.addBuffer( aB.buffer );

        for(let j=0; j<4; j++){
            
            aB.sine(fund*randomArrayValue([1, 2, 4, 8])*randomArrayValue(cArray)*randomFloat(0.99, 1.01), 1).fill();
            b.spliceBuffer(aB.buffer, i/8, i+1/8, i/8);

        }

    }

    b.normalize(-1, 1);

    c.setBuffer( b.buffer );

    i.connect(c);
    c.connect(output);
    output.connect(masterGain);

    i.startAtTime( globalNow+1 );

}

const noiseSpliceTest = () => {

    const output = new MyGain(16);

    const bL = 2;
    const fund = 432*0.5;

    const b = new MyBuffer2(1, bL, audioCtx.sampleRate);
    const aB = new MyBuffer2(1, bL, audioCtx.sampleRate);
    const sB = new MyBuffer(1, bL, audioCtx.sampleRate);
    const c = new MyConvolver(1, bL, audioCtx.sampleRate);
    
    const i = new MyBuffer2(1, bL, audioCtx.sampleRate);
    i.impulse().add();
    i.playbackRate = 1;

    // i.playbackRate = 1;

    const sL = 30;

    for(let i=0; i<sL; i++){

        aB.noise().fill();
        aB.constant(randomFloat(0.01, 0.25)).multiply();
        b.spliceBuffer(aB.buffer, i/sL, (i+1)/sL, i/sL);

    }

    b.normalize(-1, 1);

    c.setBuffer( b.buffer );

    i.connect(c);
    c.connect(output);
    output.connect(masterGain);

    i.startAtTime( globalNow+1 );

}

const bloomSchwaTest = () => {

    const output = new MyGain(64);

    const bL = 2;
    const fund = 432;

    const b = new MyBuffer2(1, bL, audioCtx.sampleRate);
    const aB = new MyBuffer2(1, bL, audioCtx.sampleRate);
    const c = new MyConvolver(1, bL, audioCtx.sampleRate);
    
    const i = new MyBuffer2(1, bL, audioCtx.sampleRate);
    i.impulse().add();
    i.playbackRate = 1;

    let rP = 0;
    const sArray = [1, 4.75, 6.375, 3.218181818181818, 4.527272727272727, 1.859375, 3.734375];
    const nOT = 4;

    for(let i=0; i<sArray.length; i++){

        for(let j=0; j<nOT; j++){

            rP = randomFloat(0.5, 0.7);

            aB.sine(fund*sArray[i]*randomArrayValue([0.25, 0.5, 1, 2, 0.125]), 1).fill();
            aB.ramp(0, 1, rP, rP, randomFloat(4, 12), randomFloat(4, 12)).multiply();

        }

        b.addBuffer( aB.buffer );

    }

    b.normalize(-1, 1);

    c.setBuffer( b.buffer );

    i.connect(c);
    c.connect(output);
    output.connect(masterGain);

    i.startAtTime( globalNow+1 );

}

const presetTest = () => {

    const output = new MyGain(16);

    const bL = 2;
    const fund = 432*0.5;

    const b = new MyBuffer2(1, bL, audioCtx.sampleRate);
    const aB = new MyBuffer2(1, bL, audioCtx.sampleRate);
    const sB = new MyBuffer(1, bL, audioCtx.sampleRate);
    const c = new MyConvolver(1, bL, audioCtx.sampleRate);
    
    const i = new MyBuffer2(1, bL, audioCtx.sampleRate);
    i.impulse().add();
    i.playbackRate = 1;

    // i.playbackRate = 1;
/*
    let rP = 0;

    for(let i=0; i<8; i++){

        rP = randomFloat(0.5, 0.7);

        aB.sine(fund*randomArrayValue([1, 2, 4, 8])*randomArrayValue([1, M2, M3, P4, P5, M6]), 1).fill();
        aB.ramp(0, 1, rP, rP, randomFloat(4, 12), randomFloat(4, 12)).multiply();

        b.addBuffer( aB.buffer );

    }
*/

    const sL = 30;

    for(let i=0; i<sL; i++){

        aB.noise().fill();
        aB.constant(randomFloat(0.01, 0.25)).multiply();
        b.spliceBuffer(aB.buffer, i/sL, (i+1)/sL, i/sL);

    }

    b.normalize(-1, 1);

    c.setBuffer( b.buffer );

    i.connect(c);
    c.connect(output);
    output.connect(masterGain);

    i.startAtTime( globalNow+1 );

}