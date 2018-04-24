//-------------------------------------
var _json='';
//-------------------------------------
var this_module=$vm.module_list[$vm.vm['__ID'].name];
var prefix=this_module.prefix; if(prefix==undefined) prefix="";
var db_pid=this_module.table_id
var rid=undefined;
//-------------------------------------
$('#D__ID').on('load',function(){
    $('#F__ID')[0].reset();
    $('#submit__ID').show();
    _set_req();
    $VmAPI.request({data:_req,callback:function(res){
        var grid_record=res.records[0];
        $('#delete__ID').hide(); if(grid_record!=undefined && grid_record.ID!==undefined) $('#delete__ID').show();
        $vm.deserialize(grid_record,'#F__ID');
        rid=res.records[0].ID
    }})
})
//-------------------------------------
var _set_req=function(){
    var sql="select top(1) ID,Information from [TABLE-"+db_pid+"]"
    _req={cmd:'query_records',sql:sql}
}
//-------------------------------------
$('#F__ID').submit(function(event){
    //--------------------------------------------------------
    event.preventDefault();
    $('#submit__ID').hide();
    //--------------------------------------------------------
    var data=$vm.serialize('#F__ID');
    var dbv={}
    //--------------------------------------------------------
    var db_pid=this_module.table_id;
    var req={cmd:"modify_record",rid:rid,db_pid:db_pid,data:data,dbv:dbv};
    $VmAPI.request({data:req,callback:function(res){
        $vm.refresh=1;
        if(rid!=undefined) window.history.go(-1);
    }});
    //--------------------------------------------------------
})
//--------------------------------------------------------
