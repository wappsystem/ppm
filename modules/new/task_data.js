//-------------------------------------
var _json='';
//-------------------------------------
var this_module=$vm.module_list[$vm.vm['__ID'].name];
var prefix=this_module.prefix; if(prefix==undefined) prefix="";
var form_module=prefix+this_module.form_module;
//-------------------------------------
$('#new__ID').off('click').on('click',function(){$vm.load_module_v2(form_module,'',{goback:1})})
//-------------------------------------
$('#D__ID').on('load',function(){  $('#help__ID').html(help); _set_req(); _request_data(); })
//-------------------------------------
var _before_submit=function(record,dbv){
    if(typeof(before_submit)!='undefined') before_submit(record,dbv);
};
//-------------------------------------
var help='<div class="container">\
                        <div class="row">\
                            <div class="col-sm-2 text-content text-left">\
                                <h4>Symbols</h4>\
                                <p><i class="fa fa-pencil-square-o"></i> Open form</p>\
                                <p><i class="fa fa-trash-o"></i> Delete Row</p>\
                                <br>\
                            </div>\
                            <div class="col-sm-2 text-content text-left">\
                                <h4><i class="fa fa-plus"></i> = Add Row</h4>\
                                <p>Entry can be done directly in the grid</p>\
                                <p>Click on <i class="fa fa-pencil-square-o"></i> to open form</p>\
                                <p>REMEMBER Click on <i class="fa fa-upload"></i> to save the changes</p>\
                                <br>\
                            </div>\
                            <div class="col-sm-2 text-content text-left">\
                                <h4><i class="fa fa-upload"></i> = Save change</h4>\
                                <p>This button will turn red when change has been made.<br>Click to save changes.</p>\
                                <br>\
                            </div>\
                            <div class="col-sm-2 text-content text-left">\
                                <h4><i class="fa fa-search"></i> = Search </h4>\
                                <p>If Keyword is empty a reloading of the list.<br>\
                                Search for full words in Keyword from the list.</p>\
                                <br>\
                            </div>\
                            <div class="col-sm-2 text-content text-left">\
                                <h4><i class="fa fa-arrow-left"></i> = Previous</h4>\
                                <h4><i class="fa fa-arrow-right"></i> = Next Page</h4>\
                                <p>If all entries don&apos;t fit into one page, these arrows can be used for paging </p>\
                                <br>\
                            </div>\
                            <div class="col-sm-2 text-content text-left">\
                                <h4><i class="fa fa-download"></i> = Export</h4>\
                                <p>Exporting the list to excel format (.csv)</p>\
                                <br>\
                            </div>\
                        </div>\
            </div>'
//-------------------------------------
