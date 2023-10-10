var rule = {
            title: '迷迷剧',
            host: 'https://mimiju.com',
            searchUrl: '/v_search/**----------fypage---.html',
            url: '/vodtype/fyclass-fypage.html',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 12; NX669J Build/SKQ1.220502.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6050.0 Mobile Safari/537.36'
            },
            timeout: 5000,
            class_parse: 'body&&.hl-nav li:gt(0);a&&Text;a&&href;.*/(.*?).html',
            cate_exclude: '明星|专题|最新|排行',
            limit: 40,
            play_parse: true,
            lazy: '',
            推荐: '.hl-vod-list;li;a&&title;a&&data-original;.remarks&&Text;a&&href',
            double: true,
            一级: '.hl-vod-list&&.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
            二级: {
                "title": ".hl-infos-title&&Text;.hl-text-conch&&Text",
                "img": ".hl-lazy&&data-original",
                "desc": ".hl-infos-content&&.hl-text-conch&&Text",
                "content": ".hl-content-text&&Text",
                "tabs": ".hl-tabs&&a",
                "lists": ".hl-plays-list:eq(#id)&&li"
            },
            搜索: '.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
        }