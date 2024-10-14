function validateInput(type, value) {
  const patterns = {
    // 数字相关
    number: /^\d+$/, // 仅数字
    positiveInteger: /^[1-9]\d*$/, // 正整数
    negativeInteger: /^-[1-9]\d*$/, // 负整数
    float: /^[+-]?\d+(\.\d+)?$/, // 浮点数
    positiveFloat: /^[1-9]\d*(\.\d+)?$/, // 正浮点数
    negativeFloat: /^-[1-9]\d*(\.\d+)?$/, // 负浮点数

    // 字符串相关
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // 邮箱
    url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/, // URL
    domain: /([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}/, // 域名
    ip: /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/, // IPv4
    ipv6: /^([a-fA-F0-9:]+:+)+[a-fA-F0-9]+$/, // IPv6 地址

    // 日期时间相关
    date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, // YYYY-MM-DD 日期格式
    time: /^([01]\d|2[0-3]):([0-5]\d)$/, // HH:MM 时间格式
    dateTime: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) ([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, // YYYY-MM-DD HH:MM:SS
    dateUS: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/, // MM/DD/YYYY 日期格式（美国）

    // 字符与文本相关
    chinese: /[\u4e00-\u9fa5]+/, // 中文字符
    alphabet: /^[a-zA-Z]+$/, // 字母
    alphanumeric: /^[a-zA-Z0-9]+$/, // 字母和数字
    hexColor: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, // Hex 颜色值
    password: /^[A-Za-z\d@$!%*?&]{8,}$/, // 至少8位，字母、数字、特殊字符
    username: /^[a-zA-Z0-9_-]{3,16}$/, // 用户名，3到16位，字母、数字、下划线、连字符
    slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/, // 网址 slug，字母、数字、连字符

    // 特殊格式相关
    postalCode: /^[1-9]\d{5}$/, // 邮政编码（中国）
    idCard: /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/, // 身份证号码（中国）
    carPlate: /^[\u4e00-\u9fa5][A-Z][A-Z0-9]{5}$/, // 车牌号（中国）

    // 货币相关
    currency: /^\d+(?:\.\d{2})?$/, // 货币格式，例如 123.45
    currencyWithSymbol: /^[¥$€£]\d+(?:\.\d{2})?$/, // 货币格式带符号

    // 其他验证
    macAddress: /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/, // MAC 地址
    creditCard: /^4[0-9]{12}(?:[0-9]{3})?$/, // Visa 信用卡（13 或 16 位）
    isbn10: /^(?:\d{9}X|\d{10})$/, // ISBN-10
    isbn13: /^(?:\d{13})$/, // ISBN-13
    strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, // 至少一个大写字母、一个小写字母和一个数字，最少 8 位
    binary: /^[01]+$/, // 二进制数
    octal: /^[0-7]+$/, // 八进制数
    hexadecimal: /^[a-fA-F0-9]+$/, // 十六进制数
  };


  // 获取对应正则表达式
  const regex = patterns[type];

  if (!regex) {
    return `未知的验证类型：${type}`;
  }

  // 返回验证结果
  return regex.test(value);
}

// 使用示例：
console.log(validateInput('email', 'test@example.com')); // true
console.log(validateInput('url', 'https://www.example.com')); // true
console.log(validateInput('number', '123456')); // true
console.log(validateInput('idCard', '123456199901011234')); // true
