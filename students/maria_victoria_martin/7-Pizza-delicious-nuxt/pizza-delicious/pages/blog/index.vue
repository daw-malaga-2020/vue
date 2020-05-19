<template>
    <div>
        <MainSlider
                subheading="Blog list"
                image="/images/bg_2.jpg"
                size="small"
        />
        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center mb-5 pb-3">
                    <div class="col-md-7 heading-section  text-center">
                        <h2 class="mb-4">Read our blog</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                </div>
                <div class="row d-flex">
                   Aqui van los posts
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import MainSlider from '@/components/MainSlider'

export default {
	name: "BlogPage",
	components: {
		MainSlider
	}
}
</script>
