const coolProgression2 = () => {

    const fund = 2*randomFloat(160, 180) // 170.66666666666666;
    console.log(fund);

    const gainVal = 0.75;

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
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch13' , 'pitch20'
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


    const c1 = [1, M2];
    const c1A = [1, M2, P4];
    const c1B = [1/M2/P4, 1, M2]; 

    const c2 = [1/M2, M2];
    const c2A = [1/M2/P5, 1, m3];

    const c3 = [1/M2/M6, 1, m3];

    // startTime, stopTime, bufferLength, rate, spliceDiv, fund, cArray, pArray, gainVal

    //
    pitchedPresetSequenceSpliceTest( 0 , 8 , 2 , 0.5 , 10 , fund , c1 , pAHigh1 , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 8 , 16 , 2 , 0.5 , 10 , fund , c2 , pAHigh1 ,  gainVal );
    
    //
    pitchedPresetSequenceSpliceTest( 16 , 24 , 2 , 0.5 , 10 , fund , c1 , pAHigh1 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 16 , 24 , 2 , 1   , 20 , fund , c1 , pAHigh1 ,  gainVal );

    //
    pitchedPresetSequenceSpliceTest( 24 , 32 , 2 , 0.5 , 10 , fund , c2 , pAHigh1 ,  gainVal );

    //
    pitchedPresetSequenceSpliceTest( 32 , 40 , 2 , 0.5 , 10 , fund      , c1 , pAHigh1 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 32 , 40 , 2 , 0.5 , 5  , fund*0.25 , c1 , pALow1 ,  gainVal );

    //
    pitchedPresetSequenceSpliceTest( 40 , 48 , 2 , 0.5 ,  10 , fund      , c2 , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceTest( 40 , 48 , 2 , 0.5 ,   5 , fund*0.25 , c2 , pALow1 , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 48 , 56 , 2 , 0.5 , 10 , fund      , c1 , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceTest( 48 , 56 , 2 , 1   , 20 , fund      , c1 , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceTest( 48 , 56 , 2 , 0.5 , 5  , fund*0.25 , c1 , pALow1 , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 56 , 64 ,  2 , 0.5 , 10  ,  fund      ,  c2 , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceTest( 56 , 64 ,  2 , 1   , 20  ,  fund      ,  c2 , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceTest( 56 , 64 ,  2 , 0.5 , 5   ,  fund*0.25 ,  c2 , pALow1 , gainVal );
    pitchedPresetSequenceSpliceTest( 56 , 64 ,  2 , 0.5 , 2.5 ,  fund*0.5  ,  c2 , pAMid1 , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 0.5 , 10  ,  fund      , c1 , pAHigh2 , gainVal );
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 1   , 20  ,  fund      , c1 , pAHigh2 , gainVal );
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 0.5 , 5   ,  fund*0.25 , c1 , pALow2 , gainVal );
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 0.5 , 2.5 ,  fund*0.5  , c1 , pAMid2 , gainVal );
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 0.5 , 4   ,  fund*0.5  , c1 , pAMid2 , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 0.5 , 10  ,   fund      , c2 , pAHigh2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 1   , 20  ,   fund      , c2 , pAHigh2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 0.5 , 5   ,   fund*0.25 , c2 , pALow2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 0.5 , 2.5 ,   fund*0.5  , c2 , pAMid2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 0.5 , 4   ,   fund*0.5  , c2 , pAMid2 ,  gainVal );

    //
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 0.5 , 10  ,  fund      ,  c1 , pAHigh2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 1   , 20  ,  fund      ,  c1 , pAHigh2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 0.5 , 5   ,  fund*0.25 ,  c1 , pALow2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 0.5 , 2.5 ,  fund*0.5  ,  c1 , pAMid2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 0.5 , 4   ,  fund*0.5  ,  c1 , pAMid2 ,  gainVal );
    
    fxPresetSequenceSpliceTest( 80 , 88 , 2 , 0.5 , 10 , fund*0.5 , c1 , fA , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund      ,  c2 , pAHigh2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund      ,  c2 , pAHigh2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund*0.25 ,  c2 , pALow2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund*0.5  ,  c2 , pAMid2 ,  gainVal );
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund*0.5  ,  c2 , pAMid2 ,  gainVal );
    
    fxPresetSequenceSpliceTest(88 , 96 ,  2 , 0.5,   10,     fund*0.5,  c1, fA,   gainVal);

    //
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  10  ,   fund      ,  c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  20  ,   fund      ,  c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  5   ,   fund*0.25 ,  c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  2.5 ,   fund*0.5  ,  c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  4   ,   fund*0.5  ,  c1 , pA , gainVal );

    /*

    // ORIGINAL PROGRESSION WITHOUT SEPARATE RANGE ARRAYS

    //
    pitchedPresetSequenceSpliceTest( 0 , 8 , 2 , 0.5 , 10 , fund , c1 , pA , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 8 , 16 , 2 , 0.5 , 10 , fund , c2 , pA ,  gainVal );
    
    //
    pitchedPresetSequenceSpliceTest( 16 , 24 , 2 , 0.5 , 10 , fund , c1 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 16 , 24 , 2 , 1   , 20 , fund , c1 , pA ,  gainVal );

    //
    pitchedPresetSequenceSpliceTest( 24 , 32 , 2 , 0.5 , 10 , fund , c2 , pA ,  gainVal );

    //
    pitchedPresetSequenceSpliceTest( 32 , 40 , 2 , 0.5 , 10 , fund      , c1 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 32 , 40 , 2 , 0.5 , 5  , fund*0.25 , c1 , pA ,  gainVal );

    //
    pitchedPresetSequenceSpliceTest( 40 , 48 , 2 , 0.5 ,  10 , fund      , c2 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 40 , 48 , 2 , 0.5 ,   5 , fund*0.25 , c2 , pA , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 48 , 56 , 2 , 0.5 , 10 , fund      , c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 48 , 56 , 2 , 1   , 20 , fund      , c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 48 , 56 , 2 , 0.5 , 5  , fund*0.25 , c1 , pA , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 56 , 64 ,  2 , 0.5 , 10  ,  fund      ,  c2 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 56 , 64 ,  2 , 1   , 20  ,  fund      ,  c2 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 56 , 64 ,  2 , 0.5 , 5   ,  fund*0.25 ,  c2 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 56 , 64 ,  2 , 0.5 , 2.5 ,  fund*0.5  ,  c2 , pA , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 0.5 , 10  ,  fund      , c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 1   , 20  ,  fund      , c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 0.5 , 5   ,  fund*0.25 , c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 0.5 , 2.5 ,  fund*0.5  , c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 64 , 72 ,  2 , 0.5 , 4   ,  fund*0.5  , c1 , pA , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 0.5 , 10  ,   fund      , c2 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 1   , 20  ,   fund      , c2 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 0.5 , 5   ,   fund*0.25 , c2 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 0.5 , 2.5 ,   fund*0.5  , c2 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 72 , 80 ,  2 , 0.5 , 4   ,   fund*0.5  , c2 , pA ,  gainVal );

    //
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 0.5 , 10  ,  fund      ,  c1 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 1   , 20  ,  fund      ,  c1 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 0.5 , 5   ,  fund*0.25 ,  c1 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 0.5 , 2.5 ,  fund*0.5  ,  c1 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 80 , 88 ,  2 , 0.5 , 4   ,  fund*0.5  ,  c1 , pA ,  gainVal );
    
    fxPresetSequenceSpliceTest( 80 , 88 , 2 , 0.5 , 10 , fund*0.5 , c1 , fA , gainVal );

    //
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund      ,  c2 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund      ,  c2 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund*0.25 ,  c2 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund*0.5  ,  c2 , pA ,  gainVal );
    pitchedPresetSequenceSpliceTest( 88 , 96 ,  2 , 0.5 , 10 , fund*0.5  ,  c2 , pA ,  gainVal );
    
    fxPresetSequenceSpliceTest(88 , 96 ,  2 , 0.5,   10,     fund*0.5,  c1, fA,   gainVal);

    //
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  10  ,   fund      ,  c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  20  ,   fund      ,  c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  5   ,   fund*0.25 ,  c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  2.5 ,   fund*0.5  ,  c1 , pA , gainVal );
    pitchedPresetSequenceSpliceTest( 96 , 104 ,  2 , randomFloat(0.25, 2) ,  4   ,   fund*0.5  ,  c1 , pA , gainVal );

    */

}
