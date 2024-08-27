const a="Higress-gvr7dx_awbbpb_qufr3bo7idl6uxxf.mdx",o="blog",e="higress-gvr7dx_awbbpb_qufr3bo7idl6uxxf",t=`
> \u4F5C\u8005\uFF1A\u806A\u8A00


**\u4EB2\u7231\u7684\u5F00\u53D1\u8005\u4EEC\uFF1A**<br />\u6211\u4EEC\u6FC0\u52A8\u5730\u5BA3\u5E03\uFF0CNacos Python SDK\u2014\u2014nacos-sdk-python1.0.0 \u7A33\u5B9A\u7248\u6B63\u5F0F\u53D1\u5E03\u5566\uFF01Nacos \u4ECE 0.8.0 \u7248\u672C\u5F00\u59CB\u5C31\u4E00\u76F4\u53C2\u4E0E Python \u751F\u6001\u5EFA\u8BBE\uFF0C\u52AA\u529B\u4F5C\u4E3A Python \u751F\u6001\u4E2D\u5206\u5E03\u5F0F\u5FAE\u670D\u52A1\u53D1\u73B0\u548C\u914D\u7F6E\u7BA1\u7406\u7684\u89E3\u51B3\u65B9\u6848\u4E00\u76F4\u5F80\u524D\u6F14\u8FDB\u3002\u76EE\u524D\u968F\u7740 AI \u9886\u57DF\u7684\u53D1\u5C55\uFF0CNacos \u793E\u533A\u7684 Python \u5F00\u53D1\u8005\u7528\u6237\u8D8A\u6765\u8D8A\u591A\uFF0C\u56E0\u6B64\u8FD9\u6B21\u6211\u4EEC\u8FED\u4EE3\u4E86 Python \u7684 GA \u7A33\u5B9A\u7248\u672C\uFF0C\u5BF9\u4E0D\u5C11\u5386\u53F2\u95EE\u9898\u505A\u4E86\u4FEE\u590D\u4EE5\u53CA\u6613\u7528\u6027\u5C42\u9762\u7684\u5404\u9879\u517C\u5BB9\u4F18\u5316\uFF0C\u5E2E\u52A9\u5927\u5BB6\u53EF\u4EE5\u66F4\u597D\u7684\u5728\u5927\u6A21\u578B\u65F6\u4EE3\u843D\u5730\u81EA\u5DF1\u7684\u4E1A\u52A1\u573A\u666F\u3002
<a name="21fd0b98"></a>
### **\u4E00\u3001\u6838\u5FC3\u4EAE\u70B9**
**\u5168\u9762\u517C\u5BB9\u6027\uFF1A**\u652F\u6301 Python 2.7\u30013.6 \u53CA 3.7 \u7248\u672C\uFF0C\u786E\u4FDD\u5E7F\u6CDB\u7684\u9879\u76EE\u9002\u914D\u6027\u3002<br />**\u65E0\u7F1D\u5BF9\u63A5 Nacos\uFF1A**\u517C\u5BB9 Nacos 1.x \u4EE5\u53CA Nacos 2.x with http protocol \u7248\u672C\uFF0C\u65E0\u8BBA\u662F\u73B0\u6709\u9879\u76EE\u5347\u7EA7\u8FD8\u662F\u65B0\u9879\u76EE\u96C6\u6210\uFF0C\u90FD\u80FD\u5E73\u6ED1\u8FC7\u6E21\u3002<br />**\u4FBF\u6377\u5B89\u88C5\uFF1A**\u901A\u8FC7 pip \u4E00\u952E\u5B89\u88C5\uFF0C\u5FEB\u901F\u4E0A\u624B\uFF0C\u547D\u4EE4\u884C\u8F93\u5165 pip install nacos-sdk-python \u5373\u53EF\u5F00\u542F\u670D\u52A1\u6CE8\u518C\u3001\u914D\u7F6E\u7BA1\u7406\u4E4B\u65C5\u3002<br />**\u7B80\u6D01 API \u8BBE\u8BA1\uFF1A**\u65E0\u8BBA\u662F\u83B7\u53D6\u914D\u7F6E\u3001\u76D1\u542C\u53D8\u66F4\uFF0C\u8FD8\u662F\u670D\u52A1\u6CE8\u518C\u4E0E\u53D1\u73B0\uFF0CAPI \u63A5\u53E3\u8BBE\u8BA1\u76F4\u89C2\u6613\u7528\uFF0C\u6781\u5927\u964D\u4F4E\u4E86\u5B66\u4E60\u6210\u672C\u3002<br />**\u5B89\u5168\u8BA4\u8BC1\uFF1A**\u652F\u6301\u7528\u6237\u540D\u5BC6\u7801\u52A0\u5BC6\u8BA4\u8BC1\u6A21\u5F0F\uFF0C\u901A\u8FC7 AK/SK \u673A\u5236\u786E\u4FDD\u4EA4\u4E92\u7684\u5B89\u5168\u6027\u3002<br />**\u7075\u6D3B\u914D\u7F6E\uFF1A**\u4E30\u5BCC\u7684\u989D\u5916\u9009\u9879\u914D\u7F6E\uFF0C\u5305\u62EC\u65E5\u5FD7\u8F6E\u8F6C\u914D\u7F6E\u3001\u81EA\u5B9A\u4E49\u8D85\u65F6\u65F6\u95F4\u3001\u957F\u8F6E\u8BE2\u95F4\u9694\u3001\u540E\u53F0\u5FC3\u8DF3\u4FDD\u6D3B\u7B49\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u5B9A\u5236\u9700\u6C42\u3002<br />**\u672C\u5730\u5FEB\u7167\u4E0E\u6545\u969C\u8F6C\u79FB\uFF1A**\u81EA\u52A8\u5B58\u50A8\u914D\u7F6E\u5FEB\u7167\uFF0C\u5373\u4F7F\u670D\u52A1\u5668\u4E0D\u53EF\u8FBE\uFF0C\u4E5F\u80FD\u4ECE\u672C\u5730\u6062\u590D\u914D\u7F6E\uFF0C\u4FDD\u969C\u670D\u52A1\u8FDE\u7EED\u6027\u3002<br />**\u5F3A\u5927\u7684\u76D1\u542C\u4E0E\u901A\u77E5\u673A\u5236\uFF1A**\u8F7B\u677E\u6DFB\u52A0\u76D1\u542C\u5668\uFF0C\u5B9E\u65F6\u54CD\u5E94\u914D\u7F6E\u53D8\u5316\uFF0C\u786E\u4FDD\u670D\u52A1\u914D\u7F6E\u7684\u5373\u65F6\u66F4\u65B0\u3002<br />**\u8BE6\u5C3D API \u53C2\u8003\uFF1A**\u8BE6\u5C3D\u7684 API \u6587\u6863\uFF0C\u6DB5\u76D6\u4ECE\u57FA\u7840\u914D\u7F6E\u83B7\u53D6\u5230\u9AD8\u7EA7\u670D\u52A1\u7BA1\u7406\u7684\u6240\u6709\u64CD\u4F5C\uFF0C\u52A9\u529B\u60A8\u9AD8\u6548\u5F00\u53D1\u3002<br />**\u4E8C\u3001\u5FEB\u901F\u5F00\u59CB**<br />**Flask \u7BC7 \u2014\u2014 \u7B80\u6D01\u800C\u4F18\u96C5\u7684\u914D\u7F6E\u4E4B\u65C5**<br />\u7B2C\u4E00\u4E2A\u4F8B\u5B50\u9009 Flask \u7684\u539F\u56E0\u662F\u56E0\u4E3A\u5B83\u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684 Python Web \u6846\u67B6\uFF0C\u7B80\u5355\u6613\u7528\uFF0C\u7279\u522B\u9002\u5408\u5FEB\u901F\u5F00\u53D1\u5C0F\u578B\u5E94\u7528\u548C\u539F\u578B\u3002\u5728 Flask \u7684\u4E16\u754C\u91CC\uFF0C\u4FDD\u6301\u8F7B\u91CF\u7EA7\u662F\u738B\u9053\uFF0C\u5728 Nacos \u793E\u533A\u4E5F\u7ECF\u5E38\u80FD\u770B\u5230\u6709\u7528\u6237\u5728\u505A Flask \u548C Nacos \u7684\u96C6\u6210\uFF0C\u4F7F\u7528 nacos-sdk-python\uFF0C\u60A8\u53EF\u4EE5\u5F88\u8F7B\u677E\u5730\u641E\u5B9A Flask \u7684\u670D\u52A1\u6CE8\u518C\u4E0E\u53D1\u73B0\uFF0C\u4EE5\u53CA\u914D\u7F6E\u7684\u52A8\u6001\u5316\u7BA1\u7406\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A
\`\`\`
# \u5BFC\u5165Flask\u5E93\uFF0C\u7528\u4E8E\u6784\u5EFAweb\u5E94\u7528from flask import Flask
# \u5BFC\u5165NacosClient\uFF0C\u7528\u4E8E\u4E0ENacos\u670D\u52A1\u5668\u4EA4\u4E92\uFF0C\u5B9E\u73B0\u914D\u7F6E\u7BA1\u7406\u548C\u670D\u52A1\u53D1\u73B0\u529F\u80FDfrom nacos import NacosClient
# \u521D\u59CB\u5316Flask\u5E94\u7528\u5B9E\u4F8Bapp = Flask(__name__)
# \u8BBE\u7F6ENacos\u670D\u52A1\u5668\u5730\u5740\uFF0C\u8BF7\u66FF\u6362\u4E3A\u5B9E\u9645\u7684Nacos\u670D\u52A1\u5668\u5730\u5740SERVER_ADDRESSES = "Your nacos server address"
# \u8BBE\u7F6ENacos\u547D\u540D\u7A7A\u95F4ID\uFF0C\u8BF7\u66FF\u6362\u4E3A\u5B9E\u9645\u7684\u547D\u540D\u7A7A\u95F4IDNAMESPACE = "Your nacos namespace"
# \u8BBE\u7F6ENacos\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u7528\u4E8E\u8BA4\u8BC1\u8BBF\u95EENacos\u670D\u52A1\u5668USERNAME = 'Your user name'PASSWORD = 'Your password'
client = NacosClient(server_addresses=SERVER_ADDRESSES, namespace=NAMESPACE, username=USERNAME, password=PASSWORD,                     log_level='INFO')

# \u5B9A\u4E49\u8DEF\u7531\uFF0C\u8BBF\u95EE\u6839\u8DEF\u5F84'/'\u65F6\u8FD4\u56DE\u7684\u6D88\u606F\uFF0C\u5C55\u793A\u6765\u81EANacos\u7684\u914D\u7F6E\u4FE1\u606F@app.route('/')def hello_world():    # \u4F7F\u7528flask\u7684config\u5BF9\u8C61\u83B7\u53D6\u540D\u4E3A"config"\u7684\u914D\u7F6E\u9879\uFF0C\u5C55\u793A\u914D\u7F6E\u5185\u5BB9    return f'Hello, World! Config from Nacos: {app.config.get("config")}'

def init():    # \u670D\u52A1\u6CE8\u518C\uFF1A\u8BA9Flask\u5E94\u7528\u5728\u542F\u52A8\u65F6\u81EA\u52A8\u6CE8\u518C\u5230Nacos\uFF0C\u5B9E\u73B0\u670D\u52A1\u53D1\u73B0\u7684\u81EA\u52A8\u5316\u3002heartbeat_interval\u53EF\u4EE5\u8C03\u6574\u540E\u53F0\u5FC3\u8DF3\u95F4\u9694\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A5\u79D2\u3002    client.add_naming_instance(service_name='my-flask-service', ip='localhost', port=5000, heartbeat_interval=5)
    # \u8BBE\u7F6ENacos\u4E2D\u914D\u7F6E\u6570\u636E\u7684\u6570\u636EID\u548C\u5206\u7EC4\uFF0C\u9ED8\u8BA4\u5206\u7EC4\u4E3A'DEFAULT_GROUP'    data_id = 'test'    group = 'DEFAULT_GROUP'
    # \u4ECENacos\u83B7\u53D6\u914D\u7F6E\uFF0C\u5E76\u66F4\u65B0\u5230Flask\u5E94\u7528\u7684config\u5BF9\u8C61\u4E2D\uFF0C\u4EE5\u4FBF\u5728\u5E94\u7528\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u914D\u7F6E    app.config.update(config=client.get_config(data_id=data_id, group=group))
    # \u6DFB\u52A0\u914D\u7F6E\u76D1\u542C\u5668\uFF0C\u5F53Nacos\u4E2D\u7684\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u81EA\u52A8\u66F4\u65B0Flask\u5E94\u7528\u7684config\u5BF9\u8C61    client.add_config_watcher(data_id=data_id, group=group,                              cb=lambda cfg: app.config.update(config=cfg['content']))

if __name__ == '__main__':    init()    app.run()
\`\`\`
\u5728\u8FD9\u4E2A\u7B80\u77ED\u7684 Flask \u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u9996\u5148\u521D\u59CB\u5316\u4E86 Nacos \u5BA2\u6237\u7AEF\uFF0C\u968F\u540E\u4ECE Nacos \u4E2D\u83B7\u53D6\u914D\u7F6E\u6765\u52A8\u6001\u8C03\u6574\u6211\u4EEC\u7684\u201C\u6B22\u8FCE\u4FE1\u606F\u201D\uFF0C\u4EE5\u53CA\u5C06\u5F53\u524D\u7684\u670D\u52A1\u5B9E\u4F8B\u6CE8\u518C\u5230\u4E86 Nacos \u670D\u52A1\u7AEF\uFF0C\u4F7F\u5F97\u5176\u4ED6\u670D\u52A1\u4E5F\u80FD\u8F7B\u6613\u53D1\u73B0\u5E76\u4E0E\u5176\u901A\u4FE1\u3002<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1724723086568-16acc3a3-afeb-424d-8710-8dd849d13b11.webp#clientId=u56731ae5-095b-4&from=paste&id=u509ca5b0&originHeight=204&originWidth=1080&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u9381547e-184c-45f3-b69d-268e9ccc632&title=)<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1724723086756-9335deb0-6689-4c18-979f-4e79454c08fd.webp#clientId=u56731ae5-095b-4&from=paste&id=u3a9f1af1&originHeight=553&originWidth=1080&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u1d93b8cd-cf00-4817-a9a8-c9505a148e1&title=)<br />**FastAPI \u7BC7 \u2014\u2014 \u6A21\u578B\u670D\u52A1\u7684\u914D\u7F6E\u7BA1\u7406**<br />FastAPI \u4E5F\u662F\u4E00\u5957\u5F88\u4F18\u79C0\u7684 Python Web \u6846\u67B6\uFF0C\u5982\u679C\u4F60\u8FFD\u6C42\u9AD8\u6027\u80FD\u3001\u5F02\u6B65\u7F16\u7A0B\u548C\u7C7B\u578B\u5B89\u5168\uFF0CFastAPI \u53EF\u80FD\u662F\u4E2A\u66F4\u597D\u7684\u9009\u62E9\u3002\u4ED6\u57FA\u4E8E Python 3.6+ \u7C7B\u578B\u63D0\u793A\uFF0C\u5229\u7528 Pydantic \u8FDB\u884C\u6570\u636E\u9A8C\u8BC1\uFF0CStarlette \u548C asyncio \u5B9E\u73B0\u5F02\u6B65\u64CD\u4F5C\uFF0C\u4F7F\u5F97 RESTful API \u5F00\u53D1\u65E2\u5FEB\u901F\u53C8\u7B80\u5355\u3002<br />\u540C\u65F6\u6211\u4EEC\u6CE8\u610F\u5230\uFF0CAI \u793E\u533A\u4E5F\u4F1A\u57FA\u4E8E FastAPI \u6765\u6784\u5EFA\u6A21\u578B\u670D\u52A1\uFF0C\u7ECF\u5E38\u4F1A\u78B0\u5230\u4EE5\u4E0B\u95EE\u9898\uFF1A

- \u6A21\u578B\u670D\u52A1\u5982\u4F55\u66B4\u9732\u7ED9\u5176\u4ED6\u670D\u52A1\u8C03\u7528\uFF0C\u5305\u62EC\u7C7B\u4F3C Java \u7B49\u8DE8\u8BED\u8A00\u670D\u52A1\u7684\u8C03\u7528
- \u6A21\u578B\u670D\u52A1\u8282\u70B9\u7684\u8C03\u7528\u8D1F\u8F7D\u5982\u4F55\u5747\u8861
- \u6A21\u578B\u670D\u52A1\u7684\u5BB9\u707E Failover \u80FD\u529B\u5982\u4F55\u5B9E\u73B0
- AI \u6A21\u578B\u9886\u57DF\u7684\u4E1A\u52A1\u914D\u7F6E\u5982\u4F55\u7BA1\u7406

\u5982\u679C\u4F60\u6709\u4EE5\u4E0A\u7684\u56F0\u60D1\uFF0C\u501F\u52A9 nacos-sdk-python \u7684\u80FD\u529B\u5B9E\u73B0 AI \u6A21\u578B\u670D\u52A1\u8DDF nacos \u7684\u5B8C\u7F8E\u878D\u5408\uFF0C\u670D\u52A1\u6CE8\u518C\u53D1\u73B0\u4E0E\u914D\u7F6E\u7BA1\u7406\u4E5F\u4F1A\u53D8\u5F97\u524D\u6240\u672A\u6709\u7684\u7B80\u6D01\u9AD8\u6548\u3002\u6211\u4EEC\u6765\u770B\u4E0B\u9762\u7684\u4E00\u4E2A\u7B80\u5355\u4F8B\u5B50\u5427\uFF1A
\`\`\`
# \u5BFC\u5165FastAPI\u5E93\uFF0C\u7528\u4E8E\u6784\u5EFAAPI\u670D\u52A1from fastapi import FastAPIfrom nacos import NacosClient
app = FastAPI()
# \u8BBE\u7F6ENacos\u670D\u52A1\u5668\u5730\u5740\uFF0C\u8BF7\u66FF\u6362\u4E3A\u5B9E\u9645\u7684Nacos\u670D\u52A1\u5668\u5730\u5740SERVER_ADDRESSES = "Your nacos server address"
# \u8BBE\u7F6ENacos\u547D\u540D\u7A7A\u95F4ID\uFF0C\u8BF7\u66FF\u6362\u4E3A\u5B9E\u9645\u7684\u547D\u540D\u7A7A\u95F4IDNAMESPACE = "Your nacos namespace"
# \u8BBE\u7F6ENacos\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u7528\u4E8E\u8BA4\u8BC1\u8BBF\u95EENacos\u670D\u52A1\u5668USERNAME = 'Your user name'PASSWORD = 'Your password'
client = NacosClient(server_addresses=SERVER_ADDRESSES, namespace=NAMESPACE, username=USERNAME, password=PASSWORD,                     log_level='INFO')

# \u5B9A\u4E49\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u5728FastAPI\u5E94\u7528\u542F\u52A8\u65F6\u6267\u884C@app.on_event("startup")async def startup_event():    # \u5728\u542F\u52A8\u65F6\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1\u6765\u521D\u59CB\u5316\u914D\u7F6E    asyncio.create_task(init())

# \u901A\u8FC7NacosClient\u83B7\u53D6\u914D\u7F6E\uFF0C\u5E76\u5B58\u50A8\u5728\u5E94\u7528\u7684\u72B6\u6001(state)\u4E2D\uFF0C\u4EE5\u4FBF\u540E\u7EED\u4F7F\u7528async def load_config(data_id, group):    app.state = {'config_data': client.get_config(data_id=data_id, group=group)}

# \u5F02\u6B65\u51FD\u6570\uFF0C\u7528\u4E8E\u521D\u59CB\u5316\u5E94\u7528\u6240\u9700\u7684\u5404\u79CD\u914D\u7F6E\u548C\u76D1\u542C\u5668async def init():    data_id = 'test'    group = 'DEFAULT_GROUP'    await load_config(data_id, group)
    def on_config_change(cfg):        # \u5F53Nacos\u4E2D\u7684\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u66F4\u65B0\u5E94\u7528\u72B6\u6001\u4E2D\u7684\u914D\u7F6E\u6570\u636E        app.state = {'config_data': cfg['content']}
    client.add_config_watcher(data_id, group, cb=on_config_change)    client.add_naming_instance(service_name='my-flask-service', ip='localhost', port=8000, heartbeat_interval=5)
# \u5B9A\u4E49\u4E00\u4E2AGET\u8BF7\u6C42\u7684\u8DEF\u7531\uFF0C\u8FD4\u56DE\u7B80\u5355\u7684\u6B22\u8FCE\u4FE1\u606F\u53CA\u5F53\u524D\u4ECENacos\u83B7\u53D6\u7684\u914D\u7F6E\u6570\u636E@app.get("/")def hello_world():    return f'Hello, World! Config from Nacos: {app.state["config_data"]}'

if __name__ == '__main__':    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
\`\`\`
![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1724723086477-aa7c1849-3f6d-4672-9462-ec7364995fb5.webp#clientId=u56731ae5-095b-4&from=paste&id=ucf7ad1dc&originHeight=531&originWidth=1080&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u62099bbb-5dbb-41e8-9607-f02c186c09e&title=)<br />\u901A\u8FC7\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7EE7\u7EED\u52A0\u5DE5\uFF0C\u5C1D\u8BD5\u628A\u4F60\u7684 AI \u7B97\u6CD5\u6A21\u578B\u5305\u88C5\u6210\u670D\u52A1\u5BF9\u5916\u66B4\u9732\u8C03\u7528\uFF0C\u540C\u65F6\u4E00\u4E9B\u7B97\u6CD5\u6A21\u578B\u53C2\u6570\u901A\u8FC7 nacos \u6765\u4F5C\u4E3A\u914D\u7F6E\u5316\u52A8\u6001\u7BA1\u7406\u3002<br />**AI \u5927\u6A21\u578B\u7BC7 \u2014\u2014 AI \u573A\u666F\u7684\u914D\u7F6E\u7BA1\u7406\u52A0\u901F\u5668**<br />\u4E3A\u4EC0\u4E48\u8FD9\u91CC\u9700\u8981\u628A AI \u5927\u6A21\u578B\u914D\u7F6E\u573A\u666F\u62CE\u51FA\u6765\u5355\u72EC\u8BB2\uFF0C\u662F\u56E0\u4E3A\u8FD9\u5728 AI \u9886\u57DF\u5341\u5206\u91CD\u8981\uFF0C\u56E0\u4E3A\u7B97\u6CD5\u5F80\u5F80\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684\u5E94\u7528\u573A\u666F\u6216\u6027\u80FD\u8981\u6C42\u9891\u7E41\u8C03\u6574\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u89C1\u7684 AI \u7B97\u6CD5\u52A8\u6001\u914D\u7F6E\u573A\u666F\uFF0C\u5927\u5BB6\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u81EA\u7531\u53D1\u6325\u60F3\u8C61\u7A7A\u95F4\uFF1A

1. **\u6A21\u578B\u7248\u672C\u7BA1\u7406\uFF1A**\u5728\u6301\u7EED\u8FED\u4EE3\u548C\u4F18\u5316\u6A21\u578B\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 Nacos \u52A8\u6001\u5207\u6362\u4E0D\u540C\u7248\u672C\u7684\u6A21\u578B\u914D\u7F6E\u3002\u4F8B\u5982\uFF0C\u5728 A/B \u6D4B\u8BD5\u65B0\u65E7\u6A21\u578B\u6548\u679C\u65F6\uFF0C\u53EF\u4EE5\u5FEB\u901F\u8C03\u6574\u914D\u7F6E\u6307\u5411\u65B0\u7684\u6A21\u578B\u7248\u672C\uFF0C\u800C\u65E0\u9700\u4FEE\u6539\u4EE3\u7801\u6216\u91CD\u542F\u670D\u52A1\u3002
2. **Dynamic Prompt Template\uFF1A**\u5F00\u53D1\u8005\u901A\u5E38\u4F1A\u4F7F\u7528 Prompt Template \u6765\u4E0E\u5927\u578B\u6A21\u578B\u4EA4\u4E92\uFF0C\u5B9E\u9645\u7684\u5F00\u53D1\u548C\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u4ED6\u4EEC\u4F1A\u4E0D\u65AD\u8C03\u6574\u6A21\u677F\uFF0C\u4EE5\u6D4B\u8BD5\u4E0E\u5927\u6A21\u578B\u7684\u4EA4\u4E92\u6548\u679C\u3002
3. **\u53C2\u6570\u8C03\u6574\uFF1A**AI \u7B97\u6CD5\u7684\u6027\u80FD\u5F88\u5927\u7A0B\u5EA6\u4E0A\u4F9D\u8D56\u4E8E\u8D85\u53C2\u6570\u7684\u9009\u62E9\u3002\u5229\u7528 Nacos\uFF0C\u53EF\u4EE5\u52A8\u6001\u8C03\u6574\u5B66\u4E60\u7387\u3001\u6279\u91CF\u5927\u5C0F\u3001\u6B63\u5219\u5316\u53C2\u6570\u7B49\uFF0C\u4ECE\u800C\u5728\u8FD0\u884C\u65F6\u4F18\u5316\u6A21\u578B\u8868\u73B0\uFF0C\u5B9E\u73B0\u5FEB\u901F\u8FED\u4EE3\u8C03\u4F18\u3002
4. **\u6570\u636E\u6E90\u914D\u7F6E\uFF1A**AI \u6A21\u578B\u8BAD\u7EC3\u548C\u63A8\u7406\u53EF\u80FD\u6D89\u53CA\u591A\u4E2A\u6570\u636E\u6E90\u3002\u901A\u8FC7 Nacos \u7BA1\u7406\u6570\u636E\u6E90\u7684 URL\u3001\u8BBF\u95EE\u5BC6\u94A5\u7B49\u4FE1\u606F\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8F7B\u677E\u5207\u6362\u6570\u636E\u6E90\uFF0C\u6216\u8005\u5E94\u5BF9\u6570\u636E\u6E90\u7684\u53D8\u52A8\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u7075\u6D3B\u6027\u548C\u7A33\u5B9A\u6027\u3002
5. **\u7279\u5F81\u9009\u62E9\u4E0E\u6743\u91CD\u8C03\u6574\uFF1A**\u5728\u590D\u6742\u6A21\u578B\u4E2D\uFF0C\u7279\u5F81\u7684\u9009\u62E9\u53CA\u5176\u6743\u91CD\u5BF9\u6A21\u578B\u6027\u80FD\u81F3\u5173\u91CD\u8981\u3002Nacos \u53EF\u4EE5\u5E2E\u52A9\u52A8\u6001\u8C03\u6574\u54EA\u4E9B\u7279\u5F81\u88AB\u542F\u7528\u3001\u7279\u5F81\u7684\u9884\u5904\u7406\u65B9\u5F0F\u4EE5\u53CA\u7279\u5F81\u7684\u91CD\u8981\u6027\u6743\u91CD\uFF0C\u4ECE\u800C\u5FEB\u901F\u54CD\u5E94\u4E1A\u52A1\u9700\u6C42\u53D8\u5316\u6216\u5E02\u573A\u73AF\u5883\u53D8\u5316\u3002
6. **\u63A8\u7406\u670D\u52A1\u8D44\u6E90\u5206\u914D\uFF1A**\u5BF9\u4E8E\u8D44\u6E90\u5BC6\u96C6\u578B\u7684 AI \u63A8\u7406\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u65F6\u8D1F\u8F7D\u60C5\u51B5\u52A8\u6001\u8C03\u6574\u8D44\u6E90\u5206\u914D\u7B56\u7565\uFF0C\u6BD4\u5982 GPU/CPU \u8D44\u6E90\u7684\u5206\u914D\u6BD4\u4F8B\u3001\u5E76\u53D1\u8BF7\u6C42\u5904\u7406\u6570\u9650\u5236\u7B49\uFF0C\u4EE5\u4F18\u5316\u670D\u52A1\u6027\u80FD\u548C\u6210\u672C\u6548\u7387\u3002
7. **\u7B97\u6CD5\u7B56\u7565\u9009\u62E9\uFF1A**\u5728\u4E00\u4E9B\u5E94\u7528\u573A\u666F\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u90E8\u7F72\u591A\u79CD\u7B97\u6CD5\u7B56\u7565\uFF08\u5982\u63A8\u8350\u7CFB\u7EDF\u4E2D\u7684\u57FA\u4E8E\u5185\u5BB9\u7684\u63A8\u8350\u3001\u534F\u540C\u8FC7\u6EE4\u7B49\uFF09\u3002\u901A\u8FC7 Nacos\uFF0C\u53EF\u4EE5\u6839\u636E\u7528\u6237\u884C\u4E3A\u5206\u6790\u6216\u4E1A\u52A1\u9700\u6C42\u52A8\u6001\u9009\u62E9\u6700\u5408\u9002\u7684\u7B97\u6CD5\u7B56\u7565\u8FDB\u884C\u90E8\u7F72\u3002
8. **\u5B89\u5168\u4E0E\u9690\u79C1\u914D\u7F6E\uFF1A**\u5BF9\u4E8E\u654F\u611F\u5E94\u7528\uFF0C\u6A21\u578B\u7684\u4F7F\u7528\u53EF\u80FD\u9700\u8981\u9075\u5FAA\u4E25\u683C\u7684\u5B89\u5168\u548C\u9690\u79C1\u653F\u7B56\u3002\u901A\u8FC7 Nacos\uFF0C\u53EF\u4EE5\u52A8\u6001\u7BA1\u7406\u52A0\u5BC6\u7B97\u6CD5\u3001\u6570\u636E\u8131\u654F\u89C4\u5219\u3001\u8BBF\u95EE\u63A7\u5236\u5217\u8868\u7B49\u914D\u7F6E\uFF0C\u786E\u4FDD AI \u670D\u52A1\u7684\u5408\u89C4\u6027\u548C\u5B89\u5168\u6027\u3002

\u57FA\u4E8E\u52A8\u6001 Promot \u8C03\u6574\u8FD9\u4E2A case\uFF0C\u8FD9\u6B21\u6211\u4EEC\u6765\u7ED3\u5408\u963F\u91CC\u4E91\u901A\u4E49\u767E\u70BC\u5B9E\u8DF5\u4E00\u4E0B\uFF0C\u6765\u770B\u770B Nacos \u53EF\u4EE5\u5728\u5176\u4E2D\u6D41\u7A0B\u4E2D\u626E\u6F14\u4EC0\u4E48\u6837\u7684\u89D2\u8272
\`\`\`
# \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3ANacosConfigManager\u7684\u7C7B\uFF0C\u7528\u4E8E\u7BA1\u7406Nacos\u914D\u7F6Eclass NacosConfigManager:    def __init__(self):        # \u521D\u59CB\u5316\u65B9\u6CD5\uFF0C\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5B57\u5178\u7528\u4E8E\u7F13\u5B58\u914D\u7F6E\u4FE1\u606F        self.config_cache = {}
    def get_config(self, data_id, group="DEFAULT_GROUP", need_watch=False):        """        \u83B7\u53D6\u914D\u7F6E\uFF0C\u5982\u679C\u7F13\u5B58\u4E2D\u6CA1\u6709\u5219\u4ECENacos\u83B7\u53D6\u5E76\u7F13\u5B58\u3002        \u5982\u679Cneed_watch\u4E3ATrue\uFF0C\u5219\u4E3A\u8BE5\u914D\u7F6E\u6DFB\u52A0\u76D1\u542C\u5668\u4EE5\u4FBF\u5728\u914D\u7F6E\u53D8\u5316\u65F6\u81EA\u52A8\u66F4\u65B0\u3002        """        if data_id not in self.config_cache:            config = client.get_config(data_id=data_id, group=group)            self.config_cache[data_id] = config
        if need_watch:            client.add_config_watcher(data_id, group, cb=self.on_config_change)        return self.config_cache[data_id]
    def on_config_change(self, cfg):        self.config_cache[cfg['data_id']] = cfg['content']

config_manager = NacosConfigManager()
# \u521D\u59CB\u5316\u5F02\u6B65\u51FD\u6570async def init():    group = 'DEFAULT_GROUP'    config_manager.get_config(promot_data_id, group, True)    config_manager.get_config(app_id_data_id, group)    config_manager.get_config(app_key_id, group)
@app.get("/")def hello_world():    # \u901A\u8FC7\u767E\u70BCApplication.call\u65B9\u6CD5\u6765\u8C03\u7528\u6A21\u578B\uFF0C\u4F20\u9012\u4ECENacos\u83B7\u53D6\u7684\u914D\u7F6E\u53C2\u6570    response = Application.call(app_id=config_manager.get_config(app_id_data_id),                                prompt=config_manager.get_config(promot_data_id),                                api_key=config_manager.get_config(app_key_id),                                )    if response.status_code != HTTPStatus.OK:        print('request_id=%s, code=%s, message=%s\\n' % (response.request_id, response.status_code, response.message))    else:        print('request_id=%s\\n output=%s\\n usage=%s\\n' % (response.request_id, response.output, response.usage))
    return response.output.text
\`\`\`
\u53EF\u4EE5\u770B\u5230\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u628A APP_KEY\u3001APP_ID \u8FD9\u7C7B\u53C2\u6570\u90FD\u653E\u5728\u4E86 Nacos \u4E2D\u5B58\u50A8\uFF0C\u540C\u65F6\u7ECF\u5E38\u9700\u8981\u8C03\u6574\u7684 promot \u6A21\u677F\u5229\u7528 Nacos \u7684\u52A8\u6001\u914D\u7F6E\u4E0B\u53D1\u80FD\u529B\u6765\u5B9E\u73B0\u8FD0\u8425\u5B9E\u65F6\u8C03\u6574\u66F4\u65B0\uFF0C\u975E\u5E38\u5BB9\u6613\u5B9E\u73B0\u7C7B\u4F3C ABTest \u7684\u6548\u679C\u3002<br />\u8FD9\u91CC\u6211\u4EEC\u6A21\u62DF\u4E86\u4E00\u4E2A\u7535\u5546\u5BA2\u6237\u52A9\u624B\u7684\u573A\u666F\uFF0C\u901A\u8FC7 Prompt \u6A21\u677F\u7684\u914D\u7F6E\u4E0B\u53D1\uFF0C\u6765\u52A8\u6001\u8C03\u6574\u5C0F\u52A9\u624B\u56DE\u590D\u5BA2\u6237\u7684\u8BDD\u672F\uFF0C\u800C\u8FD9\u4E00\u5207\u5B8C\u5168\u4E0D\u9700\u8981\u4F60\u91CD\u65B0\u4FEE\u6539\u6216\u8005\u91CD\u65B0\u90E8\u7F72\u6A21\u578B\u5C31\u53EF\u4EE5\u529E\u5230\u3002\u4E0B\u9762\u7684\u5BF9\u6BD4\u662F\u5426\u6709\u89C9\u5F97\u6548\u679C\u66F4\u62DF\u4EBA\u5462\uFF1F<br />\u8C03\u4F18\u524D\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1724723086677-0646c8d7-a9e4-4a8b-a4c6-eb1f10bf227e.webp#clientId=u56731ae5-095b-4&from=paste&id=u4ecce066&originHeight=825&originWidth=1080&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u7a37edbb-c1e9-4a8c-bbe4-2a86ab9d399&title=)<br />\u8C03\u4F18\u540E\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1724723086526-36f42b43-ca88-40ec-a569-f24a45f9260a.webp#clientId=u56731ae5-095b-4&from=paste&id=u5e27bf25&originHeight=439&originWidth=1080&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=ufa238462-220f-472b-a5e2-8aa01d63a39&title=)<br />**\u4E09\u3001\u52A0\u5165\u6211\u4EEC**

\u6700\u540E\uFF0C\u6211\u4EEC\u8BDA\u9080\u6BCF\u4E00\u4F4D Python \u5F00\u53D1\u8005\u4F53\u9A8C nacos-sdk-python\uFF0C\u5E76\u671F\u5F85\u60A8\u7684\u5B9D\u8D35\u53CD\u9988\u3002\u65E0\u8BBA\u662F\u529F\u80FD\u5EFA\u8BAE\u8FD8\u662F\u9047\u5230\u7684\u95EE\u9898\uFF0C\u90FD\u8BF7\u4E0D\u541D\u544A\u77E5\u3002\u8BA9\u6211\u4EEC\u643A\u624B\u63A8\u52A8 Python \u5FAE\u670D\u52A1\u751F\u6001\u7684\u53D1\u5C55\uFF0C\u5171\u521B\u66F4\u52A0\u9AD8\u6548\u3001\u7A33\u5B9A\u7684\u5F00\u53D1\u73AF\u5883\u3002

\u7ACB\u5373\u884C\u52A8\u5427\uFF0C\u63A2\u7D22 Nacos \u5E26\u6765\u7684\u65E0\u9650\u53EF\u80FD\uFF0C\u8BA9\u60A8\u7684\u5FAE\u670D\u52A1\u67B6\u6784\u66F4\u52A0\u5065\u58EE\u3001\u7075\u6D3B\uFF01<br />\u52A0\u4E2A\u9884\u544A\uFF1A\u6211\u4EEC\u7684 Nacos Python SDK \u9002\u914D Nacos 2.x Grpc \u6A21\u5F0F\u5DE5\u4F5C\u4E5F\u5728\u8FDB\u884C\u4E2D\uFF0C\u4E0D\u4E45\u7684\u5C06\u6765\u5C31\u80FD\u8DDF\u5927\u5BB6\u6B63\u5F0F\u4EAE\u76F8\uFF01<br />**GitHub \u4ED3\u5E93\uFF1A**<br />\u8BBF\u95EE nacos-sdk-python\uFF0C\u67E5\u770B\u6587\u6863\u3001\u62A5\u544A\u95EE\u9898\u6216\u8D21\u732E\u4EE3\u7801\uFF0C\u5171\u540C\u6784\u5EFA\u66F4\u597D\u7684 Nacos Python \u793E\u533A\uFF1A_https://github.com/nacos-group/nacos-sdk-python_

`,s={title:"Nacos Python SDK \u5F3A\u52BF\u6765\u88AD\uFF0C\u52A8\u6001\u7BA1\u7406\u5927\u6A21\u578B Prompt\uFF01",description:"Nacos Python SDK \u5F3A\u52BF\u6765\u88AD\uFF0C\u52A8\u6001\u7BA1\u7406\u5927\u6A21\u578B Prompt\uFF01",keywords:["Higress"],date:"2024-08-27",category:"release"},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_qufr3bo7idl6uxxf.mdx",rawData:void 0};export{n as _internal,t as body,o as collection,s as data,a as id,e as slug};
