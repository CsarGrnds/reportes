function moveCols() {
    var ss = SpreadsheetApp.getActive();
    var sourceSheet = ss.getSheetByName('Historico de cumplimiento');
    var destSheet = ss.getSheetByName('Historico de cumplimiento');

    //Cumplimento Gestion de Eventos													
    sourceSheet.getRange('C2:C16').copyTo(destSheet.getRange('B2:B16'))
    sourceSheet.getRange('D2:D16').copyTo(destSheet.getRange('C2:C16'))
    sourceSheet.getRange('E2:E16').copyTo(destSheet.getRange('D2:D16'))
    sourceSheet.getRange('F2:F16').copyTo(destSheet.getRange('E2:E16'))
    sourceSheet.getRange('G2:G16').copyTo(destSheet.getRange('F2:F16'))
    sourceSheet.getRange('H2:H16').copyTo(destSheet.getRange('G2:G16'))
    sourceSheet.getRange('I2:I16').copyTo(destSheet.getRange('H2:H16'))
    sourceSheet.getRange('J2:J16').copyTo(destSheet.getRange('I2:I16'))
    sourceSheet.getRange('K2:K16').copyTo(destSheet.getRange('J2:J16'))
    sourceSheet.getRange('L2:L16').copyTo(destSheet.getRange('K2:K16'))
    sourceSheet.getRange('M2:M16').copyTo(destSheet.getRange('L2:L16'))
    sourceSheet.getRange('N2:N16').copyTo(destSheet.getRange('M2:M16'), {
        contentsOnly: true
    })
    sourceSheet.getRange('B2').copyTo(destSheet.getRange('N2'))
    //Cumplimiento Gestion de Solicitudes General													
    sourceSheet.getRange('C19:C53').copyTo(destSheet.getRange('B19:B53'))
    sourceSheet.getRange('D19:D53').copyTo(destSheet.getRange('C19:C53'))
    sourceSheet.getRange('E19:E53').copyTo(destSheet.getRange('D19:D53'))
    sourceSheet.getRange('F19:F53').copyTo(destSheet.getRange('E19:E53'))
    sourceSheet.getRange('G19:G53').copyTo(destSheet.getRange('F19:F53'))
    sourceSheet.getRange('H19:H53').copyTo(destSheet.getRange('G19:G53'))
    sourceSheet.getRange('I19:I53').copyTo(destSheet.getRange('H19:H53'))
    sourceSheet.getRange('J19:J53').copyTo(destSheet.getRange('I19:I53'))
    sourceSheet.getRange('K19:K53').copyTo(destSheet.getRange('J19:J53'))
    sourceSheet.getRange('L19:L53').copyTo(destSheet.getRange('K19:K53'))
    sourceSheet.getRange('M19:M53').copyTo(destSheet.getRange('L19:L53'))
    sourceSheet.getRange('N19:N53').copyTo(destSheet.getRange('M19:M53'), {
        contentsOnly: true
    })
    sourceSheet.getRange('B19').copyTo(destSheet.getRange('N19'))
    //Cumplimiento Gestion de Solicitudes N1													
    sourceSheet.getRange('C56:C89').copyTo(destSheet.getRange('B56:B89'))
    sourceSheet.getRange('D56:D89').copyTo(destSheet.getRange('C56:C89'))
    sourceSheet.getRange('E56:E89').copyTo(destSheet.getRange('D56:D89'))
    sourceSheet.getRange('F56:F89').copyTo(destSheet.getRange('E56:E89'))
    sourceSheet.getRange('G56:G89').copyTo(destSheet.getRange('F56:F89'))
    sourceSheet.getRange('H56:H89').copyTo(destSheet.getRange('G56:G89'))
    sourceSheet.getRange('I56:I89').copyTo(destSheet.getRange('H56:H89'))
    sourceSheet.getRange('J56:J89').copyTo(destSheet.getRange('I56:I89'))
    sourceSheet.getRange('K56:K89').copyTo(destSheet.getRange('J56:J89'))
    sourceSheet.getRange('L56:L89').copyTo(destSheet.getRange('K56:K89'))
    sourceSheet.getRange('M56:M89').copyTo(destSheet.getRange('L56:L89'))
    sourceSheet.getRange('N56:N89').copyTo(destSheet.getRange('M56:M89'), {
        contentsOnly: true
    })
    sourceSheet.getRange('B56').copyTo(destSheet.getRange('N56'))
    //Cumplimiento Soporte N1													
    sourceSheet.getRange('C93:C125').copyTo(destSheet.getRange('B93:B125'))
    sourceSheet.getRange('D93:D125').copyTo(destSheet.getRange('C93:C125'))
    sourceSheet.getRange('E93:E125').copyTo(destSheet.getRange('D93:D125'))
    sourceSheet.getRange('F93:F125').copyTo(destSheet.getRange('E93:E125'))
    sourceSheet.getRange('G93:G125').copyTo(destSheet.getRange('F93:F125'))
    sourceSheet.getRange('H93:H125').copyTo(destSheet.getRange('G93:G125'))
    sourceSheet.getRange('I93:I125').copyTo(destSheet.getRange('H93:H125'))
    sourceSheet.getRange('J93:J125').copyTo(destSheet.getRange('I93:I125'))
    sourceSheet.getRange('K93:K125').copyTo(destSheet.getRange('J93:J125'))
    sourceSheet.getRange('L93:L125').copyTo(destSheet.getRange('K93:K125'))
    sourceSheet.getRange('M93:M125').copyTo(destSheet.getRange('L93:L125'))
    sourceSheet.getRange('N93:N125').copyTo(destSheet.getRange('M93:M125'), {
        contentsOnly: true
    })
    sourceSheet.getRange('B93').copyTo(destSheet.getRange('N93'))
}
