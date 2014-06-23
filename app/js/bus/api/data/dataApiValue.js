
ozpIwc.DataApiValue = ozpIwc.util.extend(ozpIwc.CommonApiValue,function(config) {
	ozpIwc.CommonApiValue.apply(this,arguments);
    config = config || {};
	this.children=config.children || [];
});

/**
 * 
 * @param {string} child - name of the child record of this
 * @returns {undefined}
 */
ozpIwc.DataApiValue.prototype.pushChild=function(child) {
	this.children.push(child);
	this.version++;
};

/**
 * 
 * @param {string} child - name of the child record of this
 * @returns {undefined}
 */
ozpIwc.DataApiValue.prototype.unshiftChild=function(child) {
	this.children.unshift(child);
	this.version++;
};

/**
 * 
 * @param {string} child - name of the child record of this
 * @returns {undefined}
 */
ozpIwc.DataApiValue.prototype.popChild=function() {
	this.version++;
	return this.children.pop();
};

/**
 * 
 * @param {string} child - name of the child record of this
 * @returns {undefined}
 */
ozpIwc.DataApiValue.prototype.shiftChild=function() {
	this.version++;
	return this.children.shift();
};

/**
 * 
 * @param {string} child - name of the child record of this
 * @returns {undefined}
 */
ozpIwc.DataApiValue.prototype.listChildren=function() {
    return this.children;
};

/**
 * 
 * @param {string} child - name of the child record of this
 * @returns {undefined}
 */
ozpIwc.DataApiValue.prototype.toPacket=function() {
	var packet=ozpIwc.CommonApiValue.prototype.toPacket.apply(this,arguments);
	packet.links=packet.links || {};
	packet.links.children=this.children;
	return packet;
};