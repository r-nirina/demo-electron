<template>
<div class="add-timer">
    <div v-if="addTimerInputsVisible" class="add-timer-inputs">
        <input class="timer-input" type="number" v-model="hour" ref="hour" name="hour" min="0" max="99" placeholder="Heures">
        <input class="timer-input" type="number" v-model="minute" ref="minute" name="minute" min="0" max="59" placeholder="Minutes">
        <input class="timer-input" type="number" v-model="second" ref="second" name="second" min="0" max="59" placeholder="Secondes">
        <button class="hide-inputs submit" type="button" @click="submitCreateTimer">
            <FontAwesomeIcon icon="check" />
        </button>
        <button class="hide-inputs cancel" type="button" @click="hideAddTimerInputs">
            <FontAwesomeIcon icon="times" />
        </button>
    </div>
    <button v-if="!addTimerInputsVisible" type="button" class="add-timer-button" @click="showAddTimerInputs">Ajouter un minuteur</button>

</div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { mapActions } from 'vuex';

library.add(faCheck)
library.add(faTimes)

export default {
    name: "AddTimer",
    components: {
        FontAwesomeIcon
    },

    data: () => ({
        addTimerInputsVisible: false,
        hour: null,
        minute: null,
        second: null,
    }),

    methods: {
        ...mapActions("timer", [ "createTimer" ]),
        showAddTimerInputs() {
            this.addTimerInputsVisible = true
        },

        hideAddTimerInputs() {
            this.addTimerInputsVisible = false
        },

        submitCreateTimer() {
            const { hour, minute, second } = this
            const timer = {
                hour: parseInt(hour) || 0,
                minute: parseInt(minute) || 0,
                second: parseInt(second) || 0
            }
            this.createTimer(timer)
            this.hideAddTimerInputs()
        }
    }
}
</script>

<style lang="scss" scoped>
.add-timer {
    height: 75px;

    .add-timer-inputs,
    .add-timer-button {
        width: 100%;
        height: 100%;
    }

    .add-timer-button {
        font-size:          24px;
        border:             none;
        background-color:   #1a1a1a;
        color:              #c5c5c5;
        border-bottom:      solid 1px #292929;
        cursor:             pointer;
        transition:         background-color 120ms linear;

        &:hover,
        &:focus {
            background-color: #292929;
        }
    }

    .add-timer-inputs {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: stretch;
        background-color: #292929;

        .timer-input {
            -moz-appearance: textfield;
            flex: 1;
            border: none;
            background-color: #292929;
            transition: background-color 120ms linear;
            color: #ffffff;
            text-align: center;
            font-size: 28px;
            font-family: 'Major Mono Display', 'Courier New';

            &::placeholder {
                font-family: 'Ubuntu';
                font-size: 24px;
            }

            &:hover,
            &:focus {
                background-color: #383838;
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }

        .hide-inputs {
            border: none;
            width: 75px;
            background-color: #292929;
            color: #c5c5c5;
            font-size: 26px;
            cursor: pointer;
            transition: color 120ms linear,
                        background-color 120ms linear;

            &.submit:hover,
            &.submit:focus {
                color: #009e35;
                background-color: #383838;
            }
            &.cancel:hover,
            &.cancel:focus {
                color: #e64646;
                background-color: #383838;
            }
        }
    }
}
</style>
