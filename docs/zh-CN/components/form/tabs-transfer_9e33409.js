amis.define('docs/zh-CN/components/form/tabs-transfer.md', function(require, exports, module, define) {

  module.exports = {
    "title": "TabsTransfer 组合穿梭器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "TabsTransfer 组合穿梭器",
    "icon": null,
    "html": "<div class=\"markdown-body\"><p>在<a href=\"./transfer\">穿梭器（Transfer）</a>的基础上扩充了左边的展示形式，支持 Tabs 的形式展示。对应的 options 的顶级数据，顶层 options 的成员支持 selectMode 配置这个 tab 下面的选项怎么展示。title 可以配置 tab 的标题。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n    \"label\": \"组合穿梭器\",\n    \"type\": \"tabs-transfer\",\n    \"name\": \"a\",\n    \"sortable\": true,\n    \"selectMode\": \"tree\",\n    \"options\": [\n      {\n        \"label\": \"成员\",\n        \"selectMode\": \"tree\",\n        \"searchable\": true,\n        \"children\": [\n          {\n            \"label\": \"法师\",\n            \"children\": [\n              {\n                \"label\": \"诸葛亮\",\n                \"value\": \"zhugeliang\"\n              }\n            ]\n          },\n          {\n            \"label\": \"战士\",\n            \"children\": [\n              {\n                \"label\": \"曹操\",\n                \"value\": \"caocao\"\n              },\n              {\n                \"label\": \"钟无艳\",\n                \"value\": \"zhongwuyan\"\n              }\n            ]\n          },\n          {\n            \"label\": \"打野\",\n            \"children\": [\n              {\n                \"label\": \"李白\",\n                \"value\": \"libai\"\n              },\n              {\n                \"label\": \"韩信\",\n                \"value\": \"hanxin\"\n              },\n              {\n                \"label\": \"云中君\",\n                \"value\": \"yunzhongjun\"\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"label\": \"用户\",\n        \"selectMode\": \"chained\",\n        \"children\": [\n          {\n            \"label\": \"法师\",\n            \"children\": [\n              {\n                \"label\": \"诸葛亮\",\n                \"value\": \"zhugeliang2\"\n              }\n            ]\n          },\n          {\n            \"label\": \"战士\",\n            \"children\": [\n              {\n                \"label\": \"曹操\",\n                \"value\": \"caocao2\"\n              },\n              {\n                \"label\": \"钟无艳\",\n                \"value\": \"zhongwuyan2\"\n              }\n            ]\n          },\n          {\n            \"label\": \"打野\",\n            \"children\": [\n              {\n                \"label\": \"李白\",\n                \"value\": \"libai2\"\n              },\n              {\n                \"label\": \"韩信\",\n                \"value\": \"hanxin2\"\n              },\n              {\n                \"label\": \"云中君\",\n                \"value\": \"yunzhongjun2\"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E5%B1%95%E7%A4%BA\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E5%B1%95%E7%A4%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义选项展示</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"组合穿梭器\",\n      \"type\": \"tabs-transfer\",\n      \"name\": \"a\",\n      \"sortable\": true,\n      \"selectMode\": \"tree\",\n      \"menuTpl\": \"<div class='flex justify-between'><span>${label}</span><span class='text-muted m-r text-sm'>${tag}</span></div>\",\n      \"valueTpl\": \"${label}(${value})\",\n      \"options\": [\n        {\n          \"label\": \"成员\",\n          \"selectMode\": \"list\",\n          \"searchable\": true,\n          \"children\": [\n            {\n              \"label\": \"诸葛亮\",\n              \"value\": \"zhugeliang\",\n              \"tag\": \"法师\",\n            },\n            {\n              \"label\": \"曹操\",\n              \"value\": \"caocao\",\n              \"tag\": \"战士\",\n            },\n            {\n              \"label\": \"钟无艳\",\n              \"value\": \"zhongwuyan\",\n              \"tag\": \"战士\",\n            },\n            {\n              \"label\": \"李白\",\n              \"value\": \"libai\",\n              \"tag\": \"打野\"\n            },\n            {\n              \"label\": \"韩信\",\n              \"value\": \"hanxin\",\n              \"tag\": \"打野\"\n            },\n            {\n              \"label\": \"云中君\",\n              \"value\": \"yunzhongjun\",\n              \"tag\": \"打野\"\n            }\n          ]\n        },\n        {\n          \"label\": \"用户\",\n          \"selectMode\": \"list\",\n          \"children\": [\n            {\n              \"label\": \"诸葛亮\",\n              \"value\": \"zhugeliang\",\n              \"tag\": \"法师\",\n            },\n            {\n              \"label\": \"曹操\",\n              \"value\": \"caocao\",\n              \"tag\": \"战士\",\n            },\n            {\n              \"label\": \"钟无艳\",\n              \"value\": \"zhongwuyan\",\n              \"tag\": \"战士\",\n            },\n            {\n              \"label\": \"李白\",\n              \"value\": \"libai\",\n              \"tag\": \"打野\"\n            },\n            {\n              \"label\": \"韩信\",\n              \"value\": \"hanxin\",\n              \"tag\": \"打野\"\n            },\n            {\n              \"label\": \"云中君\",\n              \"value\": \"yunzhongjun\",\n              \"tag\": \"打野\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%95%B0%E6%8D%AE%E6%87%92%E5%8A%A0%E8%BD%BD\" href=\"#%E6%95%B0%E6%8D%AE%E6%87%92%E5%8A%A0%E8%BD%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>数据懒加载</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n    \"label\": \"组合穿梭器\",\n    \"type\": \"tabs-transfer\",\n    \"name\": \"a\",\n    \"sortable\": true,\n    \"selectMode\": \"tree\",\n    \"options\": [\n      {\n        \"label\": \"成员\",\n        \"selectMode\": \"associated\",\n        \"searchable\": true,\n        \"leftMode\": \"tree\",\n        \"children\": [\n          {\n            ref: \"user\",\n            \"children\": [\n              {\n                \"label\": \"诸葛亮\",\n                \"value\": \"zhugeliang2\"\n              },\n              {\n                \"label\": \"上官婉儿\",\n                \"value\": \"shangguan\"\n              }\n            ]\n          },\n          {\n            \"ref\": \"a\",\n            \"children\": [\n              {\n                \"label\": \"A-1\",\n                \"value\": \"a1\"\n              },\n              {\n                \"label\": \"A-2\",\n                \"value\": \"a2\"\n              }\n            ]\n          },\n          {\n            \"ref\": \"b\",\n            \"children\": [\n              {\n                \"label\": \"B-1\",\n                \"value\": \"b1\"\n              }\n            ]\n          },\n          {\n            \"ref\": \"c\",\n            \"children\": [\n              {\n                \"label\": \"C-1\",\n                \"value\": \"c1\"\n              }\n            ]\n          },\n          {\n            \"ref\": \"d\",\n            \"children\": [\n              {\n                \"label\": \"D-1\",\n                \"value\": \"d1\"\n              }\n            ]\n          },\n          {\n            \"ref\": \"e\",\n            \"children\": [\n              {\n                \"label\": \"E-1\",\n                \"value\": \"e1\"\n              },\n              {\n                \"label\": \"E-2\",\n                \"value\": \"e2\"\n              }\n            ]\n          }\n        ],\n        \"leftOptions\": [\n          {\n            \"defer\": true,\n            \"deferApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/getOptions\",\n            \"label\": \"DEFER\"\n          },\n          {\n            \"label\": \"法师\",\n            \"value\": \"user\"\n          }\n        ]\n      },\n      {\n        \"label\": \"用户\",\n        \"selectMode\": \"chained\",\n        \"children\": [\n          {\n            \"label\": \"法师\",\n            \"children\": [\n              {\n                \"label\": \"诸葛亮\",\n                \"value\": \"zhugeliang2\"\n              }\n            ]\n          },\n          {\n            \"label\": \"战士\",\n            \"children\": [\n              {\n                \"label\": \"曹操\",\n                \"value\": \"caocao2\"\n              },\n              {\n                \"label\": \"钟无艳\",\n                \"value\": \"zhongwuyan2\"\n              }\n            ]\n          },\n          {\n            \"label\": \"打野\",\n            \"children\": [\n              {\n                \"label\": \"李白\",\n                \"value\": \"libai2\"\n              },\n              {\n                \"label\": \"韩信\",\n                \"value\": \"hanxin2\"\n              },\n              {\n                \"label\": \"云中君\",\n                \"value\": \"yunzhongjun2\"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>更多配置请参考<a href=\"./transfer\">穿梭器（Transfer）</a>。</p>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>[name]: string</code> 组件的值<br/><code>items: Option[]</code> 选项集合</td>\n<td>选中值变化时触发</td>\n</tr>\n<tr>\n<td>tab-change</td>\n<td><code>key: number</code> 当前激活的选项卡索引</td>\n<td>选项卡切换时触发</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"change\" href=\"#change\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>change</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n      {\n       \"label\": \"组合穿梭器\",\n        \"type\": \"tabs-transfer\",\n        \"name\": \"a\",\n        \"sortable\": true,\n        \"selectMode\": \"tree\",\n        \"options\": [\n          {\n            \"label\": \"成员\",\n            \"selectMode\": \"tree\",\n            \"searchable\": true,\n            \"children\": [\n              {\n                \"label\": \"法师\",\n                \"children\": [\n                  {\n                    \"label\": \"诸葛亮\",\n                    \"value\": \"zhugeliang\"\n                  }\n                ]\n              },\n              {\n                \"label\": \"战士\",\n                \"children\": [\n                  {\n                    \"label\": \"曹操\",\n                    \"value\": \"caocao\"\n                  },\n                  {\n                    \"label\": \"钟无艳\",\n                    \"value\": \"zhongwuyan\"\n                  }\n                ]\n              },\n              {\n                \"label\": \"打野\",\n                \"children\": [\n                  {\n                    \"label\": \"李白\",\n                    \"value\": \"libai\"\n                  },\n                  {\n                    \"label\": \"韩信\",\n                    \"value\": \"hanxin\"\n                  },\n                  {\n                    \"label\": \"云中君\",\n                    \"value\": \"yunzhongjun\"\n                  }\n                ]\n              }\n            ]\n          },\n          {\n            \"label\": \"用户\",\n            \"selectMode\": \"chained\",\n            \"children\": [\n              {\n                \"label\": \"法师\",\n                \"children\": [\n                  {\n                    \"label\": \"诸葛亮\",\n                    \"value\": \"zhugeliang2\"\n                  }\n                ]\n              },\n              {\n                \"label\": \"战士\",\n                \"children\": [\n                  {\n                    \"label\": \"曹操\",\n                    \"value\": \"caocao2\"\n                  },\n                  {\n                    \"label\": \"钟无艳\",\n                    \"value\": \"zhongwuyan2\"\n                  }\n                ]\n              },\n              {\n                \"label\": \"打野\",\n                \"children\": [\n                  {\n                    \"label\": \"李白\",\n                    \"value\": \"libai2\"\n                  },\n                  {\n                    \"label\": \"韩信\",\n                    \"value\": \"hanxin2\"\n                  },\n                  {\n                    \"label\": \"云中君\",\n                    \"value\": \"yunzhongjun2\"\n                  }\n                ]\n              }\n            ]\n          }\n        ],\n        \"onEvent\": {\n            \"change\": {\n                \"actions\": [\n                    {\n                      \"actionType\": \"toast\",\n                      \"args\": {\n                          \"msg\": \"${event.data.value|json}\"\n                      }\n                    }\n                ]\n            }\n        }\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"tab-change\" href=\"#tab-change\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>tab-change</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n      {\n       \"label\": \"组合穿梭器\",\n        \"type\": \"tabs-transfer\",\n        \"name\": \"a\",\n        \"sortable\": true,\n        \"selectMode\": \"tree\",\n        \"options\": [\n          {\n            \"label\": \"成员\",\n            \"selectMode\": \"tree\",\n            \"searchable\": true,\n            \"children\": [\n              {\n                \"label\": \"法师\",\n                \"children\": [\n                  {\n                    \"label\": \"诸葛亮\",\n                    \"value\": \"zhugeliang\"\n                  }\n                ]\n              },\n              {\n                \"label\": \"战士\",\n                \"children\": [\n                  {\n                    \"label\": \"曹操\",\n                    \"value\": \"caocao\"\n                  },\n                  {\n                    \"label\": \"钟无艳\",\n                    \"value\": \"zhongwuyan\"\n                  }\n                ]\n              },\n              {\n                \"label\": \"打野\",\n                \"children\": [\n                  {\n                    \"label\": \"李白\",\n                    \"value\": \"libai\"\n                  },\n                  {\n                    \"label\": \"韩信\",\n                    \"value\": \"hanxin\"\n                  },\n                  {\n                    \"label\": \"云中君\",\n                    \"value\": \"yunzhongjun\"\n                  }\n                ]\n              }\n            ]\n          },\n          {\n            \"label\": \"用户\",\n            \"selectMode\": \"chained\",\n            \"children\": [\n              {\n                \"label\": \"法师\",\n                \"children\": [\n                  {\n                    \"label\": \"诸葛亮\",\n                    \"value\": \"zhugeliang2\"\n                  }\n                ]\n              },\n              {\n                \"label\": \"战士\",\n                \"children\": [\n                  {\n                    \"label\": \"曹操\",\n                    \"value\": \"caocao2\"\n                  },\n                  {\n                    \"label\": \"钟无艳\",\n                    \"value\": \"zhongwuyan2\"\n                  }\n                ]\n              },\n              {\n                \"label\": \"打野\",\n                \"children\": [\n                  {\n                    \"label\": \"李白\",\n                    \"value\": \"libai2\"\n                  },\n                  {\n                    \"label\": \"韩信\",\n                    \"value\": \"hanxin2\"\n                  },\n                  {\n                    \"label\": \"云中君\",\n                    \"value\": \"yunzhongjun2\"\n                  }\n                ]\n              }\n            ]\n          }\n        ],\n        \"onEvent\": {\n            \"tab-change\": {\n                \"actions\": [\n                    {\n                      \"actionType\": \"toast\",\n                      \"args\": {\n                          \"msg\": \"${event.data.key}\"\n                      }\n                    }\n                ]\n            }\n        }\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为初始值。6.3.0 及以下版本为<code>resetValue</code></td>\n</tr>\n<tr>\n<td>selectAll</td>\n<td>-</td>\n<td>全选</td>\n</tr>\n<tr>\n<td>changeTabKey</td>\n<td><code>activeKey: number</code> 选中的 Tab</td>\n<td>修改当前选中 tab，来选择其他选项</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: string</code> | <code>string[]</code> 更新的值</td>\n<td>更新数据，开启<code>multiple</code>支持设置多项，开启<code>joinValues</code>时，多值用<code>,</code>分隔，否则多值用数组</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"clear\" href=\"#clear\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>clear</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"label\": \"组合穿梭器\",\n          \"type\": \"tabs-transfer\",\n          \"name\": \"a\",\n          \"sortable\": true,\n          \"selectMode\": \"tree\",\n          \"options\": [\n            {\n              \"label\": \"成员\",\n              \"selectMode\": \"tree\",\n              \"searchable\": true,\n              \"children\": [\n                {\n                  \"label\": \"法师\",\n                  \"children\": [\n                    {\n                      \"label\": \"诸葛亮\",\n                      \"value\": \"zhugeliang\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"战士\",\n                  \"children\": [\n                    {\n                      \"label\": \"曹操\",\n                      \"value\": \"caocao\"\n                    },\n                    {\n                      \"label\": \"钟无艳\",\n                      \"value\": \"zhongwuyan\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"打野\",\n                  \"children\": [\n                    {\n                      \"label\": \"李白\",\n                      \"value\": \"libai\"\n                    },\n                    {\n                      \"label\": \"韩信\",\n                      \"value\": \"hanxin\"\n                    },\n                    {\n                      \"label\": \"云中君\",\n                      \"value\": \"yunzhongjun\"\n                    }\n                  ]\n                }\n              ]\n            },\n            {\n              \"label\": \"用户\",\n              \"selectMode\": \"chained\",\n              \"children\": [\n                {\n                  \"label\": \"法师\",\n                  \"children\": [\n                    {\n                      \"label\": \"诸葛亮\",\n                      \"value\": \"zhugeliang2\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"战士\",\n                  \"children\": [\n                    {\n                      \"label\": \"曹操\",\n                      \"value\": \"caocao2\"\n                    },\n                    {\n                      \"label\": \"钟无艳\",\n                      \"value\": \"zhongwuyan2\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"打野\",\n                  \"children\": [\n                    {\n                      \"label\": \"李白\",\n                      \"value\": \"libai2\"\n                    },\n                    {\n                      \"label\": \"韩信\",\n                      \"value\": \"hanxin2\"\n                    },\n                    {\n                      \"label\": \"云中君\",\n                      \"value\": \"yunzhongjun2\"\n                    }\n                  ]\n                }\n              ]\n            }\n          ],\n          \"value\": \"zhugeliang\",\n          \"id\": \"clear_text\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"清空\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"clear\",\n                            \"componentId\": \"clear_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"reset\" href=\"#reset\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>reset</h3><p>如果配置了<code>resetValue</code>，则重置时使用<code>resetValue</code>的值，否则使用初始值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"label\": \"组合穿梭器\",\n          \"type\": \"tabs-transfer\",\n          \"name\": \"a\",\n          \"sortable\": true,\n          \"selectMode\": \"tree\",\n          \"options\": [\n            {\n              \"label\": \"成员\",\n              \"selectMode\": \"tree\",\n              \"searchable\": true,\n              \"children\": [\n                {\n                  \"label\": \"法师\",\n                  \"children\": [\n                    {\n                      \"label\": \"诸葛亮\",\n                      \"value\": \"zhugeliang\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"战士\",\n                  \"children\": [\n                    {\n                      \"label\": \"曹操\",\n                      \"value\": \"caocao\"\n                    },\n                    {\n                      \"label\": \"钟无艳\",\n                      \"value\": \"zhongwuyan\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"打野\",\n                  \"children\": [\n                    {\n                      \"label\": \"李白\",\n                      \"value\": \"libai\"\n                    },\n                    {\n                      \"label\": \"韩信\",\n                      \"value\": \"hanxin\"\n                    },\n                    {\n                      \"label\": \"云中君\",\n                      \"value\": \"yunzhongjun\"\n                    }\n                  ]\n                }\n              ]\n            },\n            {\n              \"label\": \"用户\",\n              \"selectMode\": \"chained\",\n              \"children\": [\n                {\n                  \"label\": \"法师\",\n                  \"children\": [\n                    {\n                      \"label\": \"诸葛亮\",\n                      \"value\": \"zhugeliang2\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"战士\",\n                  \"children\": [\n                    {\n                      \"label\": \"曹操\",\n                      \"value\": \"caocao2\"\n                    },\n                    {\n                      \"label\": \"钟无艳\",\n                      \"value\": \"zhongwuyan2\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"打野\",\n                  \"children\": [\n                    {\n                      \"label\": \"李白\",\n                      \"value\": \"libai2\"\n                    },\n                    {\n                      \"label\": \"韩信\",\n                      \"value\": \"hanxin2\"\n                    },\n                    {\n                      \"label\": \"云中君\",\n                      \"value\": \"yunzhongjun2\"\n                    }\n                  ]\n                }\n              ]\n            }\n          ],\n          \"value\": \"zhugeliang\",\n          \"id\": \"reset_text\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"重置\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"reset\",\n                            \"componentId\": \"reset_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"setvalue\" href=\"#setvalue\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>setValue</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"label\": \"组合穿梭器\",\n          \"type\": \"tabs-transfer\",\n          \"name\": \"a\",\n          \"sortable\": true,\n          \"selectMode\": \"tree\",\n          \"options\": [\n            {\n              \"label\": \"成员\",\n              \"selectMode\": \"tree\",\n              \"searchable\": true,\n              \"children\": [\n                {\n                  \"label\": \"法师\",\n                  \"children\": [\n                    {\n                      \"label\": \"诸葛亮\",\n                      \"value\": \"zhugeliang\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"战士\",\n                  \"children\": [\n                    {\n                      \"label\": \"曹操\",\n                      \"value\": \"caocao\"\n                    },\n                    {\n                      \"label\": \"钟无艳\",\n                      \"value\": \"zhongwuyan\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"打野\",\n                  \"children\": [\n                    {\n                      \"label\": \"李白\",\n                      \"value\": \"libai\"\n                    },\n                    {\n                      \"label\": \"韩信\",\n                      \"value\": \"hanxin\"\n                    },\n                    {\n                      \"label\": \"云中君\",\n                      \"value\": \"yunzhongjun\"\n                    }\n                  ]\n                }\n              ]\n            },\n            {\n              \"label\": \"用户\",\n              \"selectMode\": \"chained\",\n              \"children\": [\n                {\n                  \"label\": \"法师\",\n                  \"children\": [\n                    {\n                      \"label\": \"诸葛亮\",\n                      \"value\": \"zhugeliang2\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"战士\",\n                  \"children\": [\n                    {\n                      \"label\": \"曹操\",\n                      \"value\": \"caocao2\"\n                    },\n                    {\n                      \"label\": \"钟无艳\",\n                      \"value\": \"zhongwuyan2\"\n                    }\n                  ]\n                },\n                {\n                  \"label\": \"打野\",\n                  \"children\": [\n                    {\n                      \"label\": \"李白\",\n                      \"value\": \"libai2\"\n                    },\n                    {\n                      \"label\": \"韩信\",\n                      \"value\": \"hanxin2\"\n                    },\n                    {\n                      \"label\": \"云中君\",\n                      \"value\": \"yunzhongjun2\"\n                    }\n                  ]\n                }\n              ]\n            }\n          ],\n          \"value\": \"zhugeliang\",\n          \"id\": \"setvalue_text\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"赋值\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"setValue\",\n                            \"componentId\": \"setvalue_text\",\n                            \"args\": {\n                                \"value\": \"yunzhongjun2\"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "自定义选项展示",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E5%B1%95%E7%A4%BA",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E5%B1%95%E7%A4%BA",
          "level": 2
        },
        {
          "label": "数据懒加载",
          "fragment": "%E6%95%B0%E6%8D%AE%E6%87%92%E5%8A%A0%E8%BD%BD",
          "fullPath": "#%E6%95%B0%E6%8D%AE%E6%87%92%E5%8A%A0%E8%BD%BD",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "change",
              "fragment": "change",
              "fullPath": "#change",
              "level": 3
            },
            {
              "label": "tab-change",
              "fragment": "tab-change",
              "fullPath": "#tab-change",
              "level": 3
            }
          ]
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "clear",
              "fragment": "clear",
              "fullPath": "#clear",
              "level": 3
            },
            {
              "label": "reset",
              "fragment": "reset",
              "fullPath": "#reset",
              "level": 3
            },
            {
              "label": "setValue",
              "fragment": "setvalue",
              "fullPath": "#setvalue",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
