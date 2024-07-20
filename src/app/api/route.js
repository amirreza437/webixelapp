export async function GET() {
    let res = {
        articles: [
            {"id":1 , "title": 'سناریو نویسی محتوا چیست ؟' , "author": 'جاویدان' , "tag": 'تولید محتوا' , "readingTime": 'ده دقیقه'},
            {"id":2 , "title": 'ویژگی یک فریلنسر کاریزماتیک' , "author" : 'جاویدان' , "tag" : 'فریلنسری' , "readingTime": 'پنج دقیقه'},
            {"id":3 , "title": '5 ابزار کاربردی برای طراحی رابط کاربری و محصول' , "author" : 'جاویدان' , "tag" : 'گرافیک و دیزاین' , "readingTime": 'شش دقیقه'},
            {"id":4 , "title": 'تولید محتوای متنی با هوش مصنوعی' , "author" : 'جاویدان' , "tag" : 'هوش مصنوعی' , "readingTime": 'هفت دقیقه'},
        ],
        courses: [
            {"id":1 , "title": 'آموزش پروژه محور React' , "description": 'دوره ایست که در آن شما به طور پیشرفته فریمورک React را با طرح پروژه وافعی یاد می گیرید' , "state": 'تکمیل ضبط' , "time": '13:15:18', "price": '900 هزار تومان'},
            {"id":2 , "title": 'آموزش پروژه محور Laravel' , "description": 'دوره ایست که در آن شما به طور پیشرفته فریمورک Laravel را با طرح پروژه وافعی یاد می گیرید' , "state": 'در حال برگزاری' , "time": '9:10:23', "price": '800 هزار تومان'},
            {"id":3 , "title": 'آموزش پروژه محور NextJS' , "description": 'دوره ایست که در آن شما به طور پیشرفته فریمورک NextJS را با طرح پروژه وافعی یاد می گیرید' , "state": 'پیش فروش' , "time": '21:03:13', "price": '850 هزار تومان'},
            {"id":4 , "title": 'آموزش پروژه محور TailwindCSS' , "description": 'دوره ایست که در آن شما به طور پیشرفته فریمورک TailwindCSS را با طرح پروژه وافعی یاد می گیرید' , "state": 'تکمیل ضبط' , "time": '12:43:32', "price": '650 هزار تومان'},
        ]
    }
    return Response.json(res)
}

export function POST() {
    
}