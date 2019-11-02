
export default (callback)=>{
    //    实例化城市查询类
    var citysearch = new AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            if (result && result.city ) {
               callback(result.city)
             }
        } else {
             callback(result.info);
        }
    });

}

