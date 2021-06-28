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
    i.playbackRate = 1;

    let rP = 0;

    for(let i=0; i<8; i++){

        rP = randomFloat(0.5, 0.7);

        aB.sine(fund*randomArrayValue([1, 2, 4, 8])*randomArrayValue([1, M2, M3, P4, P5, M6]), 1).fill();
        aB.ramp(0, 1, rP, rP, randomFloat(4, 12), randomFloat(4, 12)).multiply();

        b.addBuffer( aB.buffer );

    }

    b.normalize(-1, 1);

    c.setBuffer( b.buffer );

    i.connect(c);
    c.connect(output);
    output.connect(masterGain);

    i.startAtTime( globalNow+1 );



}