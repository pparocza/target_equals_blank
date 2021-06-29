const presetSpliceSection = () => {

    presetSpliceTest(0,  48, 10, 1*400/m2/P5);
    presetSpliceTest(8,  48, 20, 1*400/m2/P5);
    presetSpliceTest(16, 48, 5, 0.5*400/m2/P5);
    presetSpliceTest(24, 48, 3, 2*400/m2/P5);
    presetSpliceTest(28, 48, 4, 2*400/m2/P5);
    presetSpliceTest(36, 48, 8, 1*400/m2/P5);

    presetSpliceTest(48, 48+48, 10, (1/M2)*1*400/m2/P5);
    presetSpliceTest(48, 48+48, 20, (1/M2)*1*400/m2/P5);
    presetSpliceTest(48, 48+48, 5,  (1/M2)*0.5*400/m2/P5);
    presetSpliceTest(48, 48+48, 3,  (1/M2)*2*400/m2/P5);
    presetSpliceTest(48, 48+48, 4,  (1/M2)*2*400/m2/P5);
    presetSpliceTest(48, 48+48, 8,  (1/M2)*1*400/m2/P5);

}