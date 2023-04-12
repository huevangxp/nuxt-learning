<template>
    <v-container>
        <!-- {{ countries }} -->
        <!-- 
        <v-data-table
            :headers="headers"
            :items="countries"
            class="elevation-1"
            loading="true"
            search="search"
        >
        </v-data-table> -->
        <!-- {{ countries }} -->
        <v-row>
            <v-col v-for="data in country" :key="data.id" cols="12" md="3">
                <v-card>
                    <v-img :src="data.flags.png"></v-img>
                    <v-card-text>
                        <p>name: {{ data.name.common }} </p><br>
                        <p>official: {{ data.name.official }} </p>
                    </v-card-text>
                    <v-card-text>
                        {{ String(data.flags.alt).slice(0,80) }}...
                    </v-card-text>
                </v-card>    
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {text:'flags',value:'png'},
                {text:'name',value:'name'},
                {text:'official name',value:'common'},
                {text:'',value:'alt'},
            ],
            countries:[]
        }
    },
    mounted() {
        this.$store.dispatch('country/getCountry')  
        this.country.forEach(el => {
            this.countries.push(el.flags.png)
        });
    },
    computed: {
        country() {
            return this.$store.state.country.country
        }
    }
}
</script>