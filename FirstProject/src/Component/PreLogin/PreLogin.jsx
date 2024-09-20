import './prelogin.css';

function PreLogin(){
    return(
        <div className='PreLogin_pageContainer'>
            <div className='PreLogin_topBackground'>
            </div>
            <section className='PreLogin_section1' style={{backgroundImage: 'url("https://img.coupangstreaming.com/clients/prelogin/web_prelogin_20240715.jpg?impolicy=bypass")'}}>
                <article>
                    <div>
                        <figure>
                            <img src="https://assets.coupangplay.com/images/bi-logo-full2.webp" alt="Coopang Play" />
                        </figure>
                        <div>
                            <img src="https://static.coupangcdn.com/image/coupang/loyalty/icons/icon-wow-2023.png" alt="badge wow" />
                            <span>쿠팡 와우회원 전용</span>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default PreLogin