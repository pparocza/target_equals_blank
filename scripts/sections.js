const coolProgression2 = () => {

    const fund = 2*randomFloat(160, 180) // 170.66666666666666;
    console.log(fund);

    const gainVal = 0.5;

    // 'pitch20' is a really nice 'house organ' type of thing that works really 
    // well here
    const pA =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7', 'pitch9' , 'pitch10', 'pitch12' , 'pitch13', 'pitch20'
    ];

    const pAHigh1 =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch12' , 'pitch13' , 'pitch20'
    ];

    const pAHigh2 =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7' , 'pitch10' , 'pitch12' , 'pitch13' , 'pitch20'
    ];

    const pAMid1 =  [ 
        'pitch23' , 'pitch27' , 'pitch20' // , 'pitch1' , 'pitch13' , 'pitch20'
    ];

    const pAMid2 =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7' , 'pitch13' , 'pitch20'
    ];

    const pALow1 =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch13' , 'pitch20'
    ];

    const pALow2 =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7' , 'pitch13' , 'pitch20'
    ];

    const fA =  [ 
        'fx1' , 'fx4' , 'fx15' , 'fx40' , 'fx20'
    ];

    const prA =  [ 
        'perc23' , 'perc27' , 'perc1' , 'perc3' , 'perc7', 'perc9' , 'perc13', 'perc20'
    ];


    const c1 = [1, M2];
    const c1A = [1, M2, P4];
    const c1B = [1/M2/P4, 1, M2]; 

    const c2 = [1/M2, M2];
    const c2A = [1/M2/P5, 1, m3];

    const c3 = [1/M2/M6, 1, m3];

    // startTime, stopTime, bufferLength, rate, spliceDiv, fund, cArray, pArray, gainVal

    //
    pitchedPresetSequenceSplicePan( 0*96 , 104 ,  2 , randomFloat(0.25, 2) ,  10  ,   fund      ,  c1 , pAMid1 , gainVal * 2 );
    pitchedPresetSequenceSplicePan( 0*96 , 104 ,  2 , randomFloat(0.25, 2) ,  20  ,   fund      ,  c1 , pAMid1 , gainVal * 2 );
    pitchedPresetSequenceSplicePan( 0*96 , 104 ,  2 , randomFloat(0.25, 2) ,  5   ,   fund*0.25 ,  c1 , pAMid1 , gainVal * 2 );
    pitchedPresetSequenceSplicePan( 0*96 , 104 ,  2 , randomFloat(0.25, 2) ,  2.5 ,   fund*0.5  ,  c1 , pAMid1 , gainVal * 2 );
    pitchedPresetSequenceSplicePan( 0*96 , 104 ,  2 , randomFloat(0.25, 2) ,  4   ,   fund*0.5  ,  c1 , pAMid1 , gainVal * 2 );

}
