onmessage=function (event) {
    var params=event.data;
    var type=params[0];
    var huchang=params[1];
    var accuracy=params[3];
    var multiply=params[4];
    var resuleParams=new Array();
    var max=10000;
    if(type==0){
        var gonggao=params[2];
        var banjing = accuracy;
        while (banjing<max) {
            if (Math.abs(Math.cos((huchang) / (2 * banjing)) - ((banjing - gonggao) / banjing)) < (accuracy*multiply)) {
                var xianchang = Math.sin((huchang) / (2 * banjing)) * banjing * 2;
                resuleParams[0]=banjing;
                resuleParams[1]=xianchang;
                break;
            }
            banjing += accuracy;
        }
    }else if(type==2){
        var xianchang=params[2];
        var banjing = accuracy;
        while (banjing<max) {
            if (Math.abs(Math.sin((huchang) / (2 * banjing)) - ((xianchang / 2) / banjing)) < accuracy*multiply) {
                break;
            }
            banjing += accuracy
        }
        var gonggao = banjing - Math.cos((huchang) / (2 * banjing)) * banjing;
        resuleParams[0]=banjing;
        resuleParams[1]=gonggao;
    }
    postMessage(resuleParams);

}