 <template>
    <div>
        price : {{ id }} kip
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    }
}
</script>