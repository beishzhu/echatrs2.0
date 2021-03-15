(function() {
    $('.monitor .tabs').on('click', 'a', function() {
            $(this).addClass('active').siblings('a').removeClass('active');
            // 选择对应索引号的content 
            // console.log($(this).index());
            $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
        })
        // 动画
    $(".marquee-view .marquee").each(function() {
        // console.log($(this));
        var rows = $(this).children().clone();
        $(this).append(rows);
    });
})();

// echarts 

// 1 点位分布图
(function() {
    var myChart = echarts.init(document.querySelector('.pie'))
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [

            {
                name: '面积模式',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: { fontSize: 10 },
                // 引导线调整
                labelLine: { // 连接扇形图线长
                    length: 6,
                    // 连接文字线长
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() { myChart.resize() })
})();

// 3 用户柱状图
(function() {
    // 柱子的颜色
    var item = {
        name: '',
        value: 1200,
        // 柱子的颜色
        itemStyle: { color: '#254065' },
        // 鼠标经过柱子的颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: 'opacity:0'
        }
    };
    var myChart = echarts.init(document.querySelector('.bar'));
    var option = {
        tooltip: {
            trigger: 'item'
        },
        // 修改线性渐变色方式 1
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: "3%",
            containLabel: true,
            // 显示网格边框
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)' // 设置网格边框颜色
        },
        xAxis: [{
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
                alignWithLabel: false,
                show: false
            },
            // 刻度标签的文字颜色
            axisLabel: {
                color: '#4c9bfd'
            },
            //X轴的颜色
            axisLine: {
                axisStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            // 剔除y轴刻度标签不显示
            axisTick: {
                show: false
            },
            // 设置y轴文字颜色
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴的颜色
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            },
            // y轴分割线颜色
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400,
                item, item, item, 900, 750, 600, 480, 240
            ],
        }]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() { myChart.resize() });
})();

// 4 订单统计
// 订单功能
// 订单功能
(function() {
    // 1. 准备数据
    var data = {
            day365: { orders: '20,301,987', amount: '99834' },
            day90: { orders: '301,987', amount: '9834' },
            day30: { orders: '1,987', amount: '3834' },
            day1: { orders: '987', amount: '834' },
        }
        // 获取显示 订单数量 容器
    var $h4Orders = $('.order h4:eq(0)')
        // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)')
    $('.order').on('click', '.filter a', function() {
            // 2. 点击切换激活样式
            $(this).addClass('active').siblings().removeClass('active')
                // 3. 点击切换数据
            var currdata = data[this.dataset.key]
            $h4Orders.html(currdata.orders)
            $h4Amount.html(currdata.amount)
        })
        // 4. 开启定时器切换数据
        // var index = 0
        // var $allTab = $('.order .filter a')
        // setInterval(function() {
        //     index++
        //     if (index >= 4) index = 0
        //     $allTab.eq(index).click()
        // }, 5000)
})();

//销售额统计
(function() {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    var myChart = echarts.init(document.querySelector('.line'))
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            right: '10%', //图例组件 距离右侧 10%
            textStyle: { //图例组件 文字颜色
                color: '#4c9bfd'
            },

        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true, //显示边框
            borderColor: '#012f4a', //边框颜色
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false, // 去除轴内间距
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: { //去除刻度
                show: false
            },
            axisLabel: { //坐标轴字体颜色
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            axisLine: { // 去除轴线
                show: false
            },
        },
        yAxis: {
            type: 'value',
            axisTick: { show: false }, //去除刻度
            axisLabel: {
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [

            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                smooth: true, //线条圆滑
                data: data.year[0],
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                smooth: true, //线条圆滑
                data: data.year[1],
            },
        ]
    };

    myChart.setOption(option);
    // 销售额统计 tab栏切换
    $('.sales').on('click', '.caption a', function() {
        // 要注意索引号的问题
        index = $(this).index() - 1
        $(this).addClass('active').siblings('a').removeClass('active');
        // 拿到当前a的自定义属性值
        // console.log(this.dataset.type);
        // 获取每个季度的值
        // console.log(data[this.dataset.type]);
        var arr = data[this.dataset.type];
        // 更换图表中的数据
        option.series[0].data = arr[0]
        option.series[1].data = arr[1]
        myChart.setOption(option);

    })

    // 定时器实现自动切换
    var index = 0
    var timer = setInterval(() => {
        index++
        if (index >= 4) index = 0
        $('.sales .caption a').eq(index).click();
    }, 1000);

    // 当鼠标经过的时候 停止定时器
    $('.sales').hover(
        function() {
            clearInterval(timer)
        },
        // 鼠标离开的时候 开启定时器
        function() {
            clearInterval(timer)
            timer = setInterval(() => {
                index++
                if (index >= 4) index = 0
                $('.sales .caption a').eq(index).click();
            }, 1000);
        }
    )

    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

// 雷达图
(function() {
    var myChart = echarts.init(document.querySelector('.radar'))

    var lineStyle = {
        normal: {
            width: 1,
            color: '#fff'
        }
    };

    var option = {
        //鼠标经过显示提示框组件
        tooltip: {
            show: true,
            position: ['60%', '10%'] //控制组件显示的位置
        },
        radar: {
            // 雷达图的指示器 内部填充数据
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            radius: '65%',
            shape: 'circle',
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            }
        },
        series: [{
                name: '北京',
                type: 'radar',
                lineStyle: lineStyle,
                data: [
                    [90, 19, 56, 11, 34]
                ],
                symbol: 'circle', //拐点用圆点标识
                symbolSize: 5, //拐点大小设置
                itemStyle: { // 拐点颜色为 白色
                    color: '#fff'
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                },
                label: { // 拐点设置数字
                    show: true,
                    color: '#fff',
                    fontSize: 10
                }
            }

        ]
    };

    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

//销售进度
(function() {
    var myChart = echarts.init(document.querySelector('.gauge'))
    var option = {

        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['130%', '150%'], // 放大图形
            // 移动下位置  套住50%文字
            center: ['48%', '80%'],
            labelLine: {
                show: false
            },
            startAngle: 180, // 起始角度，支持范围[0, 360]
            // 鼠标经过不变大
            hoverOffset: 0,
            data: [{
                    value: 100,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                },
                { value: 100, itemStyle: { color: '#12274d' } },
                {
                    value: 200,
                    itemStyle: { // 透明隐藏第三块区域
                        color: 'transparent'
                    }
                },

            ]
        }]
    };
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();


// 全国热榜
(function() {
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ]

    var supHTML = '';
    $.each(hotData, function(index, item) {
        console.log(item);
        supHTML += `<li><span>${item.city}</span><span>${item.sales} <s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span></li>`

    });
    $('.sup').html(supHTML);

    // 鼠标经过高亮显示 利用事件委托 因为li是动态生成的

    $('.province .sup').on('mouseenter', 'li', function() {
        index = $(this).index();
        render($(this));
    });

    function render(that) {
        that.addClass('active').siblings().removeClass();
        // 获取对应的数据
        // console.log(hotData[$(this).index()].brands);
        var subHTML = ''
        $.each(hotData[that.index()].brands, function(index, item) {
            // console.log(item);
            subHTML += `<li><span>${item.name}</span>${item.num}<span> <s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span></li>`
        });
        $('.sub').html(subHTML);
    };
    // 让第一个自动选中  先把所有li选出来 
    var lis = $('.province .sup li');
    lis.eq(0).mouseenter() //然后让第一个 li 处于鼠标经过状态

    // 开启定时器
    var index = 0
    var timer = setInterval(function() {
        index++
        if (index >= 5) index = 0
            // $('.province .sup li').eq(index).mouseenter()
        render(lis.eq(index));
    }, 2000);

    //鼠标经过停止定时器

    $('.province .sup').hover(
        () => {
            clearInterval(timer);
        },
        () =>
        timer = setInterval(function() {
            index++
            if (index >= 5) index = 0
                // $('.province .sup li').eq(index).mouseenter()
            render(lis.eq(index));
        }, 2000)
    )
})();