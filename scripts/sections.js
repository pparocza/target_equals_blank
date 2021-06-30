const pitchedPresetSpliceSection = () => {

    // 

    //

    // pitchedPresetSpliceTest(2,  48, 5, fund, 'pitch35', 32);

    // pitchedPresetSpliceTest(8,  48, 20, 1*400/m2/P5, 'pitch36', 32);
    // pitchedPresetSpliceTest(16, 48, 5, fund, 'pitch36', 32);
    // pitchedPresetSpliceTest(24, 48, 3, 2*400/m2/P5, 'pitch36', 32);
    // pitchedPresetSpliceTest(28, 48, 4, 2*400/m2/P5, 'pitch36', 32);
    // pitchedPresetSpliceTest(36, 48, 8, 1*400/m2/P5, 'pitch36', 32);

}

const percussionPresetSpliceSection = () => {

    // percussionPresetSpliceTest(0, 48, 10,   ['perc15'], 0.25);
    // percussionPresetSpliceTest(8, 48, 5 ,   ['perc15'], 0.25);
    // percussionPresetSpliceTest(8, 48, 7 ,   ['perc17'], 0.25);
    // percussionPresetSpliceTest(16, 48, 14 , ['perc10'], 0.25);

    percussionPresetSpliceTest(0, 48, 7, 
        [
            'perc30', 'perc32'
        ], 
    1);

}

const fxPresetSpliceSection = () => {

    fxPresetSpliceTest(0, 48, 10, ['fx22', 'fx28', 'fx30'], 0.25);

}

const mixedPresetSpliceSection = () => {

    mixedPresetSpliceTest(
        0, 48, 10, fund,
        ['pitch35'],
        ['perc30'],
        ['fx22'], 
        0.25
    );

}

const coolProgression = () => {

    const fund = 0.5*400/m2/P5;
    const gainVal = 2;

    pitchedPresetSpliceTest(0,  8, 2, fund, ['pitch29'], gainVal);

    pitchedPresetSpliceTest(8,  16, 2, (1/P4)*fund, ['pitch29'], gainVal);

    //

    pitchedPresetSpliceTest(16,  24, 3, fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(16,  24, 7, fund, ['pitch35'], gainVal);

    pitchedPresetSpliceTest(24,  32, 2, (1/P4)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(24,  32, 5, (1/M2)*fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(24,  32, 2, (1/P4)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(24,  32, 5, (1/M2)*fund, ['pitch35'], gainVal);

    //

    pitchedPresetSpliceTest(32,  40, 3, (1/P5)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(32,  40, 2, fund*m3, ['pitch27'], gainVal);

    pitchedPresetSpliceTest(40,  48, 3, (1/P4)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(40,  48, 5, fund/M2,     ['pitch35'], gainVal);
    pitchedPresetSpliceTest(40,  48, 1, (1/M2)*fund, ['pitch27'], gainVal);

    // 

    pitchedPresetSpliceTest(48,  56, 3, (1/P5)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(48,  56, 7, (1/M3)*fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(48,  56, 1, (1/P5)*fund*2, ['pitch27'], gainVal);

    pitchedPresetSpliceTest(56,  64, 3, (1/P4)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(56,  64, 5, (1/M2)*fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(56,  64, 2, (1/M6)*fund*2, ['pitch27'], gainVal);

    //

    pitchedPresetSpliceTest(64,  72, 3, fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(64,  72, 7, fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(64,  72, 1, fund, ['pitch27'], gainVal);

    pitchedPresetSpliceTest(72,  80, 2, (1/P4)*fund, ['pitch29', 'pitch27'], gainVal);
    pitchedPresetSpliceTest(72,  80, 7, (1/P4)*fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(72,  80, 1, fund*m3, ['pitch27'], gainVal);

    // 

    pitchedPresetSpliceTest(80,  88, 3, fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(80,  88, 7, fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(80,  88, 1, fund, ['pitch27'], gainVal);

    pitchedPresetSpliceTest(88,  96, 2, (1/P4)*fund, ['pitch29', 'pitch27'], gainVal);
    pitchedPresetSpliceTest(88,  96, 5, (1/P4)*fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(88,  96, 3, fund*m3, ['pitch27'], gainVal);

    //

    pitchedPresetSpliceTest(96,  104, 3, (1/P5)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(96,  104, 7, (1/M3)*fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(96,  104, 1, fund*P4, ['pitch27'], gainVal);

    pitchedPresetSpliceTest(104,  112, 3, (1/P4)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(104,  112, 5, (1/M2)*fund, ['pitch35'], gainVal);

    // 

    pitchedPresetSpliceTest(112,  120, 3, (1/P5)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(112,  120, 7, (1/M3)*fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(112,  120, 2, fund, ['pitch27'], 2);

    pitchedPresetSpliceTest(120,  128, 3, (1/P4)*fund, ['pitch29'], gainVal);
    pitchedPresetSpliceTest(120,  128, 5, (1/M2)*fund, ['pitch35'], gainVal);
    pitchedPresetSpliceTest(120,  128, 1, fund/M2, ['pitch27'], gainVal);

}

const coolProgressionTest1 = () => {

    const fund = 0.5*400/m2/P5;

    pitchedPresetSpliceTest(0, 8, 2, fund, ['pitch29', 'pitch27'], 1);

}

const presetTests = () => {

    const fund = 0.5*400/m2/P5;

    pitchedPresetSpliceTest(0, 8, 2, fund, ['pitch4'], 1);

}

const presetComboTests = () => {

    const fund = 0.5*400/m2/P5;

    pitchedPresetSpliceTest(0, 8, 2, fund, ['pitch29', 'pitch27'], 1);

}

const presetPitchSequenceTests = () => {

    const fund = 0.25*400/m2/P5;
    const cArray = [1, M2, P4, M6];

    // pitchedPresetSequenceSpliceTest(0, 8, 6 /*randomInt(10, 21)*/, 2*fund, [1, M2, M3, P4, P5, M6], ['pitch7', 'pitch4', 'pitch3', 'pitch8', 'pitch10'], 1);
    
    pitchedPresetSequenceSpliceTest(0, 16, randomInt(10, 12), 2*fund, [1, M3, P5, 2], ['pitch7', 'pitch4', 'pitch3', 'pitch8', 'pitch10'], 1);
    
    // pitchedPresetSequenceSpliceTest(16, 24, randomInt(10, 21), 2*fund, [1/M2, M2, P4, 2], ['pitch7'], 1);

}

const testSections = () => {

    // presetTests();
    // presetComboTests();
    presetPitchSequenceTests();

}
