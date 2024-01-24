<template>
  <div class="last-games-graph">
    <h3>Last 5 Games Graph</h3>
    <div class="graph-container">
      <div
        v-for="(game, index) in gamePlacements"
        :key="index"
        class="placement-bar"
        :style="{ height: calculateBarHeight(game.percent) }"
        @mouseover="showTooltip($event, game)"
        @mouseout="hideTooltip"
      ></div>
    </div>
    <div v-if="tooltip.visible" class="tooltip" :style="{ top: tooltip.top + 'px', left: tooltip.left + 'px' }">
      {{ tooltip.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gamePlacements: Array,
  },
  data() {
    return {
      tooltip: {
        visible: false,
        text: "",
        top: 0,
        left: 0,
      },
    };
  },
  methods: {
    calculateBarHeight(percent) {
      return percent + "%";
    },
    showTooltip(event, game) {
      const tooltipText = `You placed ${game.placement} with ${game.numPlayers} players`;
      this.tooltip = {
        visible: true,
        text: tooltipText,
        top: event.clientY + 10,
        left: event.clientX + 10,
      };
    },
    hideTooltip() {
      this.tooltip.visible = false;
    },
  },
};
</script>

<style scoped>
.last-games-graph {
  text-align: center;
}

.graph-container {
  display: flex;
}

.placement-bar {
  width: 20px;
  background-color: #4caf50;
  margin-right: 10px;
  transition: height 0.3s ease;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  background-color: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
}
</style>
