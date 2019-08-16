function moveCols2() {
    var ss = SpreadsheetApp.getActive();
    var sourceSheet = ss.getSheetByName('Agentes');
    var destSheet = ss.getSheetByName('Agentes');

    //Eventos atendidos												
    sourceSheet.getRange('O2:O11').copyTo(destSheet.getRange('N2:N11'))
    sourceSheet.getRange('P2:P11').copyTo(destSheet.getRange('O2:O11'))
    sourceSheet.getRange('Q2:Q11').copyTo(destSheet.getRange('P2:P11'))
    sourceSheet.getRange('R2:R11').copyTo(destSheet.getRange('Q2:Q11'))
    sourceSheet.getRange('S2:S11').copyTo(destSheet.getRange('R2:R11'))
    sourceSheet.getRange('T2:T11').copyTo(destSheet.getRange('S2:S11'))
    sourceSheet.getRange('U2:U11').copyTo(destSheet.getRange('T2:T11'))
    sourceSheet.getRange('V2:V11').copyTo(destSheet.getRange('U2:U11'))
    sourceSheet.getRange('W2:W11').copyTo(destSheet.getRange('V2:V11'))
    sourceSheet.getRange('X2:X11').copyTo(destSheet.getRange('W2:W11'))
    sourceSheet.getRange('Y2:Y11').copyTo(destSheet.getRange('X2:X11'))
    sourceSheet.getRange('Z2:Z11').copyTo(destSheet.getRange('Y2:Y11'), {
        contentsOnly: true
    })
    sourceSheet.getRange('N2').copyTo(destSheet.getRange('Z2'))
    //Porcentaje de cumplimento eventos												
    sourceSheet.getRange('O14:O23').copyTo(destSheet.getRange('N14:N23'))
    sourceSheet.getRange('P14:P23').copyTo(destSheet.getRange('O14:O23'))
    sourceSheet.getRange('Q14:Q23').copyTo(destSheet.getRange('P14:P23'))
    sourceSheet.getRange('R14:R23').copyTo(destSheet.getRange('Q14:Q23'))
    sourceSheet.getRange('S14:S23').copyTo(destSheet.getRange('R14:R23'))
    sourceSheet.getRange('T14:T23').copyTo(destSheet.getRange('S14:S23'))
    sourceSheet.getRange('U14:U23').copyTo(destSheet.getRange('T14:T23'))
    sourceSheet.getRange('V14:V23').copyTo(destSheet.getRange('U14:U23'))
    sourceSheet.getRange('W14:W23').copyTo(destSheet.getRange('V14:V23'))
    sourceSheet.getRange('X14:X23').copyTo(destSheet.getRange('W14:W23'))
    sourceSheet.getRange('Y14:Y23').copyTo(destSheet.getRange('X14:X23'))
    sourceSheet.getRange('Z14:Z23').copyTo(destSheet.getRange('Y14:Y23'), {
        contentsOnly: true
    })
    sourceSheet.getRange('N14').copyTo(destSheet.getRange('Z14'))
    //Solicitudes atendidas												
    sourceSheet.getRange('O26:O35').copyTo(destSheet.getRange('N26:N35'))
    sourceSheet.getRange('P26:P35').copyTo(destSheet.getRange('O26:O35'))
    sourceSheet.getRange('Q26:Q35').copyTo(destSheet.getRange('P26:P35'))
    sourceSheet.getRange('R26:R35').copyTo(destSheet.getRange('Q26:Q35'))
    sourceSheet.getRange('S26:S35').copyTo(destSheet.getRange('R26:R35'))
    sourceSheet.getRange('T26:T35').copyTo(destSheet.getRange('S26:S35'))
    sourceSheet.getRange('U26:U35').copyTo(destSheet.getRange('T26:T35'))
    sourceSheet.getRange('V26:V35').copyTo(destSheet.getRange('U26:U35'))
    sourceSheet.getRange('W26:W35').copyTo(destSheet.getRange('V26:V35'))
    sourceSheet.getRange('X26:X35').copyTo(destSheet.getRange('W26:W35'))
    sourceSheet.getRange('Y26:Y35').copyTo(destSheet.getRange('X26:X35'))
    sourceSheet.getRange('Z26:Z35').copyTo(destSheet.getRange('Y26:Y35'), {
        contentsOnly: true
    })
    sourceSheet.getRange('N26').copyTo(destSheet.getRange('Z26'))
    //Porcentaje de cumplimento solicitudes											
    sourceSheet.getRange('O38:O47').copyTo(destSheet.getRange('N38:N47'))
    sourceSheet.getRange('P38:P47').copyTo(destSheet.getRange('O38:O47'))
    sourceSheet.getRange('Q38:Q47').copyTo(destSheet.getRange('P38:P47'))
    sourceSheet.getRange('R38:R47').copyTo(destSheet.getRange('Q38:Q47'))
    sourceSheet.getRange('S38:S47').copyTo(destSheet.getRange('R38:R47'))
    sourceSheet.getRange('T38:T47').copyTo(destSheet.getRange('S38:S47'))
    sourceSheet.getRange('U38:U47').copyTo(destSheet.getRange('T38:T47'))
    sourceSheet.getRange('V38:V47').copyTo(destSheet.getRange('U38:U47'))
    sourceSheet.getRange('W38:W47').copyTo(destSheet.getRange('V38:V47'))
    sourceSheet.getRange('X38:X47').copyTo(destSheet.getRange('W38:W47'))
    sourceSheet.getRange('Y38:Y47').copyTo(destSheet.getRange('X38:X47'))
    sourceSheet.getRange('Z38:Z47').copyTo(destSheet.getRange('Y38:Y47'), {
        contentsOnly: true
    })
    sourceSheet.getRange('N38').copyTo(destSheet.getRange('Z38'))
}
