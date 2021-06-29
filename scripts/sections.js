const pitchedPresetSpliceSection = () => {

    const fund = 0.5*400/m2/P5;

    // 

    pitchedPresetSpliceTest(0,  8, 2, fund, ['pitch29'], 2);

    pitchedPresetSpliceTest(8,  16, 2, (1/P4)*fund, ['pitch29'], 2);

    //

    pitchedPresetSpliceTest(16,  24, 3, fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(16,  24, 7, fund, ['pitch35'], 2);

    pitchedPresetSpliceTest(24,  32, 2, (1/P4)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(24,  32, 5, (1/M2)*fund, ['pitch35'], 2);
    pitchedPresetSpliceTest(24,  32, 2, (1/P4)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(24,  32, 5, (1/M2)*fund, ['pitch35'], 2);

    //

    pitchedPresetSpliceTest(32,  40, 3, (1/P5)*fund, ['pitch29'], 2);

    pitchedPresetSpliceTest(40,  48, 3, (1/P4)*fund, ['pitch29'], 2);
    // pitchedPresetSpliceTest(0,  48, 2, fund, ['pitch20'], 2);

    // 

    pitchedPresetSpliceTest(48,  56, 3, (1/P5)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(48,  56, 7, (1/M3)*fund, ['pitch35'], 2);

    pitchedPresetSpliceTest(56,  64, 2, (1/P4)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(56,  64, 5, (1/M2)*fund, ['pitch35'], 2);

    //

    pitchedPresetSpliceTest(64,  72, 3, fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(64,  72, 7, fund, ['pitch35'], 2);
    // pitchedPresetSpliceTest(64,  72, 4, fund, ['pitch32'], 2);

    pitchedPresetSpliceTest(72,  80, 2, (1/P4)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(72,  80, 7, (1/P4)*fund, ['pitch36'], 2);

    // 

    pitchedPresetSpliceTest(80,  88, 3, fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(80,  88, 7, fund, ['pitch35'], 2);

    pitchedPresetSpliceTest(88,  96, 3, (1/P4)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(88,  96, 7, (1/P4)*fund, ['pitch36'], 2);

    //

    pitchedPresetSpliceTest(96,  104, 3, (1/P5)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(96,  104, 7, (1/M3)*fund, ['pitch35'], 2);

    pitchedPresetSpliceTest(104,  112, 3, (1/P4)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(104,  112, 5, (1/M2)*fund, ['pitch35'], 2);

    // 

    pitchedPresetSpliceTest(112,  120, 3, (1/P5)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(112,  120, 7, (1/M3)*fund, ['pitch35'], 2);

    pitchedPresetSpliceTest(120,  128, 3, (1/P4)*fund, ['pitch29'], 2);
    pitchedPresetSpliceTest(120,  128, 5, (1/M2)*fund, ['pitch35'], 2);

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