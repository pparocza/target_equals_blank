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

    const i = new FXPresets();
    i.fx39();

    const c = new MyConvolver(1, bL, audioCtx.sampleRate);

    c.setBuffer( b.buffer );

    bufferGraph(b.buffer);
    bufferGraph(b2.buffer);
    // bufferGraph(i.buffer);

    i.connect(c);
    c.connect(output);
    output.connect(masterGain);

    i.startAtTime( globalNow+1 );

}
