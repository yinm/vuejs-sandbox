import { Vue } from 'vue-property-decorator';
export default class HelloVue extends Vue {
    private val;
    clickButton(val: string): void;
    onValueChange(newValue: string, oldValue: string): void;
    value: string;
    inputValue: string;
    mounted(): void;
    readonly isDisabled: boolean;
    handleInput($event: any): void;
    handleClick(): void;
}
