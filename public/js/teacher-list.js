define(['jquery','template','bootstrap'],function ($,template) {
        $.ajax({
            type : 'get',
            url : '/api/teacher',
            dataType : 'json',
            success : function(data){
                var html = template('teacherInfoTpl',{list:data.result});
                $('#teacherInfo').html(html)
                //绑定查看讲师信息的单击事件
                $('#teacherInfo').find('.precherInfo').click(function () {
                    var tcId = $(this).closest('td').attr('data-id');

                    $.ajax({
                        type : 'get',
                        url : '/api/teacher/view',
                        data : {tc_id :tcId},
                        dataType : 'json',
                        success : function (data) {
                            data.result.tc_hometown = data.result.tc_hometown.replace(/[|]/g,' ')
                            var html = template('teacherModalInfoTpl',data.result);
                            $('#teacherModalInfo').html(html);
                            //显示弹窗
                            $('#teachermodal').modal();
                        }

                    })

                })

            }
        })





})